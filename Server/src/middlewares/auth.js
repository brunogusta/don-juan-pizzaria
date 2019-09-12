const jwt = require('jsonwebtoken');
const env = require('../.env');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ error: 'no token provided' });
  }

  const parts = authHeader.split(' ');

  if (!parts.length === 2) {
    return res.status(401).send({ error: 'Token error' });
  }

  const [scheme, token] = parts;

  console.log(authHeader);
  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: 'Token malformatted' });
  }

  jwt.verify(token, env.authSecret, (err, decoded) => {
    if (err) return res.status(401).send({ error: 'token invalid' });

    req.userId = decoded.id;
    return next();
  });
};
