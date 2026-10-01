const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
  });

const driveSchema = new mongoose.Schema({
  name: String,
  date: String,
  location: String,
  status: {
    type: String,
    enum: ['Upcoming', 'Ongoing'],
    default: 'Upcoming'
  },
});

const Drive = mongoose.model('Drive', driveSchema);

// API to fetch all placement drives
app.get('/api/getBooks', async (req, res) => {
  try {
    const drives = await Drive.find();
    res.json(drives);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching placement drives',
      error: error.message
    });
  }
});

// API to add a new placement drive
app.post('/api/addBook', async (req, res) => {
  try {
    const { name, date, location, status } = req.body;

    const newDrive = new Drive({
      name,
      date,
      location,
      status
    });

    await newDrive.save();

    res.status(201).json({
      message: 'Drive added successfully',
      drive: newDrive
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error adding placement drive',
      error: error.message
    });
  }
});

// API to delete a placement drive
app.delete('/api/deleteBook/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await Drive.findByIdAndDelete(id);

    res.json({
      message: 'Drive deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting placement drive',
      error: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
