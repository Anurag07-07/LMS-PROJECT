import mongoose = require("mongoose");
require('dotenv').config()

export const dbConnect =async()=>{
  try {
    await mongoose.connect(process.env.MONGO_URI as string)
    console.log(`MongoDatabase Connected Successfully`);
  } catch (error:unknown) {
    console.log('MongoDatabase Connection Failed');
    console.error(error);
    process.exit(1); // Exit the process with failure
  }
}