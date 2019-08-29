const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pizzahut', {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
