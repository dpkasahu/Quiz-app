const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.DATABASE, {
  ssl: true,  // Keep SSL enabled if you're connecting to Atlas
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
