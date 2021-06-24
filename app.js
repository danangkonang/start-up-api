const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(express.static(`${__dirname}/public`));
app.use(express.static('public'));

app.use('/v1', require('./router'));

const server = app.listen(process.env.PORT || 9000, () => {
  console.log(`Listening on port ${server.address().port}`);
});