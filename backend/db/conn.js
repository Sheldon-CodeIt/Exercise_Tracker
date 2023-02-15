const mongoose = require('mongoose')

const uri = process.env.DATABASE;

mongoose.connect(uri)
  .then(() => console.log('Successfully connected to MongoDB!'))
  .catch((error) => console.error('Error connecting to Database'));