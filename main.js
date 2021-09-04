const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// const express = require('express');
// const bodyParser = require('body-parser');
// // const cors = require('cors');

// const app = express();

// // app.use(cors());

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // app.use(express.static(`${__dirname}/public`));
// app.use(express.static('public'));
// // app.get("/", (req, res) => {
// //   return res.sendStatus(200).json({
// //     status: 200,
// //     message: "pong"
// //   })
// // })

// // app.use('/v1', require('./router'));
// app.use(require('./router'))

// const server = app.listen(process.env.PORT || 9000, () => {
//   console.log(`Listening on port ${server.address().port}`);
// });