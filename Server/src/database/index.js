const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testeauth', {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
