import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URL=process.env.DB_URL;
export const connectUsingMongoose = async()=>{
    try{
        await mongoose.connect(URL,{
        });
        console.log('Mongoose Connected');
        
    }catch(err){
        console.log("Error while connecting to db")
        console.log(err);
    }  
}

       

