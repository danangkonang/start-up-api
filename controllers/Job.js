const models = require('../models/index')
exports.index=(req, res)=>{
    models.Job.findAll()
    .then( userResponse => {
      res.status( 200 ).json( userResponse )
    })
    .catch( error => {
      res.status( 400 ).send( error )
    })
}