import express from "express"
import ProductController from "./product.controller.js"

const productRouter=express.Router()
const productController=new ProductController();

productRouter.post("/create",(req,res)=>{productController.createProduct(req,res)})
productRouter.get("/",(req,res)=>{productController.getAllProducts(req,res)})
productRouter.patch("/update-quantity/:id/",(req,res)=>{productController.updateQuantity(req,res)})
productRouter.delete("/:id",(req,res)=>{productController.deleteProduct(req,res)})


export default productRouter;