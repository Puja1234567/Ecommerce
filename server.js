import express from "express";   
import { connectUsingMongoose } from "./config/db.js";
import productRouter from "./product/product.routes.js";


const server=express();   //server created
server.use(express.json())

//routes
server.use("/api/products",productRouter);

server.get("/",(req,res)=>{
     res.send("Welcome to Product Inventory Management") // default request handeller
})

server.use((req,res)=>{
    res.status(404).send("api not found");  //middleware for handelling 404 requests
})
server.listen("3000",()=>{
    console.log("Server is running on port 3000");  //server is listening
    connectUsingMongoose();  //mongoose is called here
})
