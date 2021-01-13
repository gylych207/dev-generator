const mongoose = require('mongoose');
const config = require('config'); 
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    
    console.log('Connected to MongoDBd')
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;