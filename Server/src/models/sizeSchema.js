const mongoose = require('../database');

const SizeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  pizzatype: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PizzaType',
    required: true
  },
  cost: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const Size = mongoose.model('Size', SizeSchema);

module.exports = Size;
