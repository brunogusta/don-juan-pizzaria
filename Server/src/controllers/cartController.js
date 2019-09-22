const express = require('express');
const PizzaTypes = require('../models/pizzaSchema');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const pizzasData = await PizzaTypes.find().populate('sizes');
    res.send(pizzasData);
  } catch (err) {
    console.log(err);
  }
});

module.exports = app => app.use('/cart', router);
