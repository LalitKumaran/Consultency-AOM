const productModel = require('../models/productModel')
const mongoose = require('mongoose')
const addProduct = async (req,res) => {
    try{
        console.log("New Product")
        const url = req.protocol + '://' + req.get('host')
        console.log(url)
        console.log("body",req.body)
        console.log("file",req.file)
        
        const newproduct = new productModel({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            description: req.body.description,
            price : req.body.price,
            category : req.body.category,
            image : 'pdts/'+req.file.filename

        });

        console.log(newproduct)
        
        newproduct.save().then((res)=>{res.status(201).send({
            success:true,
            message:"Product added Successfully",
            newproduct,
        })}).catch((err)=>{res.status(404).send({
            success:false,
            message:"Error",
            err,
        })})
        
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Adding Product',
            error
        })
    }
    
}
const updateproduct=async(req,res)=>
{
    try{
        const pid=req.body.pid
        console.log(req.body)
        const product =await productModel.find({_id:pid})
        if(product)
        {
            await productModel.updateOne({ _id: pid }, { name:req.body.name , description:req.body.description,price:req.params.price});
            res.status(201).send({
                success:true,
                message:"Product updated Successfully",
                product,
            })

        }
        else{
            res.send("not found")
        }
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in getting Product',
            error
        })
    }
}

const getProduct = async (req,res) => {
    try{
        const pid = req.params.pid
        console.log(pid)
        const product  = await productModel.findOne({_id:pid})
            if(!product){
                return res.status(404).send({
                    success:false,
                    message:'Product not found',
                })
            }
            else{
                res.status(201).send({
                    success:true,
                    message:"Product Found",
                    product,
                })
            } 
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in getting Product',
            error
        })
    }
    
}

const allProducts = async (req,res) => {
   try{
    const products = await productModel.find()
    console.log(products)
    
    res.status(200).send({
        success : true,
        message : "All Products",
        products,
    })
   } 
   catch(error){
    res.status(500).send({
        success : false,
        message : "Error getting products"
    })
   }
} 


module.exports = {addProduct,getProduct,allProducts,updateproduct};