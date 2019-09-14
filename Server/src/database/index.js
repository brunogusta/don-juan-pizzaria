const mongoose = require('mongoose');
const env = require('../.env');

mongoose
  .connect(env.URL_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(error => console.log(error));

mongoose.Promise = global.Promise;

module.exports = mongoose;
