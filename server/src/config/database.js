import mongoose from 'mongoose'

mongoose.connect("mongodb://0.0.0.0:27017/descentral-shop")
  .then(() => console.log('Succesfully connected to database'))
  .catch((e) => console.log(`Error during database connection : ${e}`))
