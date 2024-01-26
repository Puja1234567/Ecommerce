import ProductModel from "./product.model.js";

export default class ProductController{
     
    
    async createProduct(req,res){            //function to create new product
        const { product } = req.body;
        const { name, quantity } = product;

    // Create a new product instance
    const newProduct = new ProductModel({name,quantity});
        try{
            await newProduct.save();
            res.status(201).json({ data: { product: newProduct } });
        }catch(err){
            console.log(err);
            res.status(500).json({message:err.message})
        }
    } 
    async getAllProducts(req,res){    // function get ALL Products
        try {
            const products = await ProductModel.find();
            res.status(200).json({ data: { product: products }});
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err.message });
        }

    }
    async updateQuantity(req,res){    //function to update quantity
        const productId=req.params.id;
        const quantity=req.query.quantity;
        try{
            const updatedProduct=await ProductModel.findByIdAndUpdate(productId,
                { $set:{quantity} },
                {new:true} )
                if (!updatedProduct) {
                return res.status(404).json({ message: "Product not found" });
            }
             res.status(201).json({data:{product:updatedProduct},message:"Product updated successfully"});

        }catch(err){
            console.log(err);
            res.status(500).json({ message: err.message });
        }

    }
    async deleteProduct(req,res){  //function to delete product
        const productId=req.params.id;
        try{
            const deletedProduct=await ProductModel.findByIdAndDelete(productId);
            if(!deletedProduct){
                return res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json({ data:{message: "Product deleted " }});
        }catch(err){
            console.log(err);
            res.status(500).json({ message: err.message });

        }

    }
     
}

