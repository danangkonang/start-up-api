const express = require('express');

const app = express();

const port = 9000;

app.get('/', (req, res) => {
  res.json({ message: 'hellow word' });
});

app.use(express.urlencoded({
  extended: true,
}));

app.post('/bar', (req, res) => {
  const { body } = req;
  res.send(body.foo);
});

app.listen(port, () => {
  console.log(`this app listening at http://localhost:${port}`);
});
