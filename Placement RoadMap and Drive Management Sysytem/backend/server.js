const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/placementDrives').then(()=>{
  console.log('Connected to MongoDB');
}).catch(()=>{
  console.log('Error connecting to MongoDB');
})


const driveSchema = new mongoose.Schema({
  name: String,
  date: String,
  location: String,
  status: { type: String, enum: ['Upcoming', 'Ongoing'], default: 'Upcoming' },
});

const Drive = mongoose.model('Drive', driveSchema);

// API to fetch all placement drives
app.get('/api/getBooks', async (req, res) => {
  try {
    const drives = await Drive.find();
    res.json(drives);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching placement drives', error });
  }
});

// API to add a new placement drive
app.post('/api/addBook', async (req, res) => {
  try {
    const { name, date, location, status } = req.body;
    const newDrive = new Drive({ name, date, location, status });
    await newDrive.save();
    res.status(201).json({ message: 'Drive added successfully', drive: newDrive });
  } catch (error) {
    res.status(500).json({ message: 'Error adding placement drive', error });
  }
});

// API to delete a placement drive
app.delete('/api/deleteBook/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Drive.findByIdAndDelete(id);
    res.json({ message: 'Drive deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting placement drive', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
