const express = require('express');
const historySchema = require('../models/historySchema');
const ordersSchema = require('../models/ordersSchema');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleware);

router.get('/userdata/:user', async (req, res) => {
  const user = req.params.user;
  try {
    const data = await historySchema.find({ user: user });

    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

router.post('/history', async (req, res) => {
  try {
    const { user } = req.body;

    if (await historySchema.findOne({ user })) {
      const totalCost = req.body.history[0];
      const newHistory = await historySchema.findOneAndUpdate(
        { user: user },
        {
          $push: {
            history: totalCost
          }
        },
        { new: true }
      );

      return res.send(newHistory);
    }

    const history = await historySchema.create(req.body);

    res.send(history);
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const order = await ordersSchema
      .create(req.body.formated)
      .catch(err => console.log(err));

    req.io.emit('order', order);

    res.status(200).send(order);
  } catch (err) {
    console.log();
  }
});

router.get('/', async (req, res) => {
  try {
    const order = await ordersSchema.find();

    res.send(order);
  } catch (err) {
    console.log(err);
  }
});

router.delete('/remove/:orderid', async (req, res) => {
  try {
    const orderId = req.params.orderid;

    await ordersSchema.findOneAndRemove({ _id: orderId }, function(err, model) {
      if (err) {
        console.log(err);
        return res.send(err);
      } else {
        return res.send(model);
      }
    });

    req.io.emit('remove');
  } catch (err) {
    console.log(err);
  }
});

router.delete('/history/:user/:orderid', async (req, res) => {
  try {
    const user = req.params.user;
    const orderId = req.params.orderid;

    await historySchema.findOneAndUpdate(
      { user: user },
      { $pull: { history: { _id: orderId } } },
      function(err, model) {
        if (err) {
          console.log(err);
          return res.send(err);
        } else {
          return res.send(model);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});
module.exports = app => app.use('/orders', router);
