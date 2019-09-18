const express = require('express');
const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = require('../.env');

const router = express.Router();

function generateToken(params = {}) {
  return jwt.sign(params, env.authSecret, {
    expiresIn: 8600
  });
}

router.post('/register', async (req, res) => {
  const { email } = req.body;
  try {
    if (await User.findOne({ email })) {
      return res.status(400).send('Usuário já existe.');
    }

    const user = await User.create(req.body);

    user.password = undefined;

    return res.send({
      user,
      token: generateToken({ id: user.id })
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: 'Registration failed' });
  }
});

router.post('/authenticate', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return res.status(400).send({ error: 'O E-mail informado não existe' });
  }

  if (!(await bcrypt.compare(password, user.password)))
    return res.status(400).send({ error: 'Senha incorreta' });

  user.password = undefined;

  return res.send({
    user,
    token: generateToken({ id: user.id })
  });
});

router.post('/authenticate/admin', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return res.status(400).send({ error: 'O E-mail informado não existe' });
  }

  if (!(await bcrypt.compare(password, user.password)))
    return res.status(400).send({ error: 'Senha incorreta' });

  user.password = undefined;

  if (!user.admin) {
    return res.status(400).send({ error: 'Usuário não é administrador' });
  }

  return res.send({
    user: user.name,
    token: generateToken({ id: user.id })
  });
});

module.exports = app => app.use('/auth', router);
