const mongoose = require('mongoose');

// Define the person schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // Corrected "require" to "required"
  },
  age: {
    type: Number
  },
  Work: {
    type: String,
    enum: ['chef', 'waiter', 'manager'],
    required: true // Corrected "require" to "required"
  },
  mobile: {
    type: String,
    required: true // Corrected "require" to "required"
  },
  email: {
    type: String,
    required: true, // Corrected "require" to "required"
    unique: true
  },
  Salary: {  // Fixed typo here from "Salart" to "Salary"
    type: Number,
    required: true // Corrected "require" to "required"
  }
});

// Create the model from the schema
const person = mongoose.model('person', personSchema);

// Export the model
module.exports = person;
