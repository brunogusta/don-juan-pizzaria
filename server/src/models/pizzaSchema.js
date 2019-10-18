const mongoose = require('../database');

const PizzaSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true
    },
    sizes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Size'
      }
    ],
    value: {
      type: String,
      required: true
    },
    key: {
      type: String,
      required: true,
      unique: true
    },
    details: [
      {
        type: String,
        required: true
      }
    ]
  },
  { usePushEach: true }
);

const PizzaType = mongoose.model('PizzaType', PizzaSchema);

module.exports = PizzaType;
