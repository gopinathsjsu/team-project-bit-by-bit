import mongoose from "mongoose";
import models from './ModelFactory/index.js'
import 'dotenv/config';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    maxPoolSize: 30, //By default it is 5 
    autoIndex: true
};

async function initMongoDB() {
  console.log("Models are", models);
    global.ModelFactory = models
    mongoose.connect(process.env.mongoDB, options, (err)=>{
      if(!err){
        console.log("Connected to mongodb");
      }else{
        console.log(err);
      }
    });

}

export default initMongoDB

