const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
  });

/* =========================
   USER MODEL
========================= */

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ['student', 'admin'],
      default: 'student',
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

/* =========================
   PLACEMENT DRIVE MODEL
========================= */

const driveSchema = new mongoose.Schema({
  name: String,
  date: String,
  location: String,
  status: {
    type: String,
    enum: ['Upcoming', 'Ongoing'],
    default: 'Upcoming',
  },
});

const Drive = mongoose.model('Drive', driveSchema);

/* =========================
   REGISTER API
========================= */

app.post('/api/register', async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: 'Email and password are required',
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: 'Password must be at least 6 characters',
      });
    }

    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return res.status(400).json({
        message: 'User already exists',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email: email.toLowerCase(),
      password: hashedPassword,
      role: role === 'admin' ? 'admin' : 'student',
    });

    await newUser.save();

    res.status(201).json({
      message: 'Registration successful',
    });
  } catch (error) {
    console.error('Registration error:', error);

    res.status(500).json({
      message: 'Registration failed',
      error: error.message,
    });
  }
});

/* =========================
   LOGIN API
========================= */

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: 'Email and password are required',
      });
    }

    const user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (!user) {
      return res.status(401).json({
        message: 'Invalid email or password',
      });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        message: 'Invalid email or password',
      });
    }

    const jwtSecret = process.env.JWT_SECRET || 'placement-drive-secret';

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        role: user.role,
      },
      jwtSecret,
      {
        expiresIn: '7d',
      }
    );

    res.json({
      message: 'Login successful',
      token,
      role: user.role,
    });
  } catch (error) {
    console.error('Login error:', error);

    res.status(500).json({
      message: 'Login failed',
      error: error.message,
    });
  }
});

/* =========================
   GET PLACEMENT DRIVES
========================= */

app.get('/api/getBooks', async (req, res) => {
  try {
    const drives = await Drive.find();

    res.json(drives);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching placement drives',
      error: error.message,
    });
  }
});

/* =========================
   ADD PLACEMENT DRIVE
========================= */

app.post('/api/addBook', async (req, res) => {
  try {
    const { name, date, location, status } = req.body;

    const newDrive = new Drive({
      name,
      date,
      location,
      status,
    });

    await newDrive.save();

    res.status(201).json({
      message: 'Drive added successfully',
      drive: newDrive,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error adding placement drive',
      error: error.message,
    });
  }
});

/* =========================
   DELETE PLACEMENT DRIVE
========================= */

app.delete('/api/deleteBook/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await Drive.findByIdAndDelete(id);

    res.json({
      message: 'Drive deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting placement drive',
      error: error.message,
    });
  }
});

/* =========================
   HEALTH CHECK
========================= */

app.get('/', (req, res) => {
  res.json({
    message: 'Placement Drive Backend is running',
  });
});

/* =========================
   START SERVER
========================= */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
