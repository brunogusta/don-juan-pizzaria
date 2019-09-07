const app = require('express')();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(cors());

app.use(bodyParser.json());

app.use('/files', express.static(path.resolve(__dirname, 'images')));

require('./controllers/authController')(app);
require('./controllers/projectController')(app);
require('./controllers/pizzasController')(app);
require('./controllers/cartController')(app);
require('./controllers/ordersController')(app);

app.listen(3002, console.log('Backend executando na porta 3002'));
