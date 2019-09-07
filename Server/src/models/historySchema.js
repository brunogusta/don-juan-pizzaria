const mongoose = require('../database');

const HistorySchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  history: [
    {
      orderNumber: {
        type: Number,
        default: 1
      },
      orderDate: {
        type: Date,
        default: Date.now
      },
      totalCost: {
        type: String,
        required: true
      }
    }
  ]
});

const History = mongoose.model('History', HistorySchema);

module.exports = History;
