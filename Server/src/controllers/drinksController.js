const express = require('express');
const Drink = require('../models/drinksSchema');
const DrinkSize = require('../models/sizeDrinksSchema');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleware);

router.post('/drink', async (req, res) => {
  try {
    const { image, name, value, sizes } = req.body;

    const drink = await Drink.create({
      image,
      name,
      value
    });

    await Promise.all(
      sizes.map(async size => {
        const drinkSize = new DrinkSize({ ...size, drinkschema: drink._id });

        await drinkSize.save();
        drink.sizes.push(drinkSize);
      })
    );

    await drink.save();

    return res.send({
      drink
    });
  } catch (err) {
    console.log(err);
  }
});

router.get('/', async (req, res) => {
  const drinkData = await Drink.find().populate('sizes');

  res.send(drinkData);
});

// router.get('/sizes', async (req, res) => {
//   const sizesData = await SizeTypes.find().then(data => {
//     const sizes = [data[0], data[1], data[2], data[3]];
//     return sizes;
//   });

//   res.send(sizesData);
// });
module.exports = app => app.use('/drinks', router);
