const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/guarderia'

mongoose.connect(MONGODB_URI)
  .then(() => console.log(`Succes to connect to the database ${MONGODB_URI}`))
  .catch(error => console.error(`An error has ocurred trying to connect to ${MONGODB_URI}`, error))
