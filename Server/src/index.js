const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

// app.post('/auth/register', (req, res) => {
//   res.send(req.body);
// });

require('./controllers/authController')(app);
require('./controllers/projectController')(app);

app.listen(3002, console.log('Backend executando na porta 3002'));
