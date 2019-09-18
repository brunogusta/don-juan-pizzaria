const app = require('express')();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const server = app.listen(3002);
const io = require('socket.io').listen(server);

app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/files', express.static(path.resolve(__dirname, 'images')));

require('./controllers/authController')(app);
require('./controllers/pizzasController')(app);
require('./controllers/cartController')(app);
require('./controllers/ordersController')(app);

// app.listen(3002, console.log('Backend executando na porta 3002'));
