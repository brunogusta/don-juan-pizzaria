const mongoose = require('../database');

const DrinkSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true
    },
    sizes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DrinkSize'
      }
    ],
    value: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
      unique: true
    }
  },
  { usePushEach: true }
);

const Drink = mongoose.model('Drink', DrinkSchema);

module.exports = Drink;
