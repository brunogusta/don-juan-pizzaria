const express = require('express');
const historySchema = require('../models/historySchema');

const router = express.Router();

router.get('/userdata/:user', async (req, res) => {
  const user = req.params.user;
  console.log(user);
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
    console.log(req.body);

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
    console.log(req.body);
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
