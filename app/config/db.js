const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://RohinthSakthivel:Rohinth1904@cluster0.uqp3t.mongodb.net/');
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err);
  }
};

module.exports = connectDB;
