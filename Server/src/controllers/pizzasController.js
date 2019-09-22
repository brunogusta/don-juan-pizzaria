const express = require('express');
const PizzaTypes = require('../models/pizzaSchema');
const SizeTypes = require('../models/sizeSchema');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

// router.use(authMiddleware);

router.post('/pizza', async (req, res) => {
  try {
    const { image, title, key, value, details, sizes } = req.body;

    const pizza = await PizzaTypes.create({
      image,
      title,
      key,
      value,
      details
    });

    await Promise.all(
      sizes.map(async size => {
        const pizzaSize = new SizeTypes({ ...size, pizzatype: pizza._id });

        await pizzaSize.save();
        pizza.sizes.push(pizzaSize);
      })
    );

    await pizza.save();

    return res.send({
      pizza
    });
  } catch (err) {
    console.log(err);
  }
});

router.get('/', async (req, res) => {
  const pizzasData = await PizzaTypes.find().populate('sizes');

  res.send(pizzasData);
});

router.get('/sizes', async (req, res) => {
  const sizesData = await SizeTypes.find().then(data => {
    const sizes = [data[0], data[1], data[2], data[3]];
    return sizes;
  });

  res.send(sizesData);
});
module.exports = app => app.use('/pizzas', router);
