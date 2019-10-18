const mongoose = require('../database');

const SizeDrinksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  drinkschema: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Drink'
  }
});

const DrinkSize = mongoose.model('DrinkSize', SizeDrinksSchema);

module.exports = DrinkSize;
