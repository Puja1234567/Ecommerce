
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    
    name: String,
    price: Number,
    quantity:Number
})

const ProductModel = mongoose.model('Products', productSchema);

export default ProductModel;
