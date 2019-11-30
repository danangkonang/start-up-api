const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const controllerJob = require('./controllers/Job')
const controllerJobCategorie = require('./controllers/JobCategorie')

app.get('/', (req, res) => res.send('Hello rest api danang konang'))
app.get('/jobs',controllerJob.index)
app.get('/job-categori',controllerJobCategorie.index)
// app.get('/products',controllerProduct.show)
// app.post('/product',controllerProduct.store)

module.exports = app;