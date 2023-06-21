const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petSpecies: {
        type: String,
        required: true
      },
      petName: {
        type: String,
        required: true,
      },
      petGender: {
        type: String,
        required: true,
      },
      petBody: {
        type: String,
        required: true,
      },
      petColor: {
        type: String,
        required: true,
      },
      petLocation: {
        type: String,
        required: true,
      },
      petImg: {
        type: String,        
      },
      petUrgent: {
        type: Number,
        default: 0
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      petFound: {
        type: Boolean,
        default: false
      },
})

module.exports = mongoose.model('Pet', PetSchema);