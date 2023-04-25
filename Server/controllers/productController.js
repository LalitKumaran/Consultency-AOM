const productModel = require('../models/productModel')

const addProduct = async (req,res) => {
    try{
        const {name,price,image} = req.body

        const product = await new productModel({name,price,image}).save()

        if(product){
            res.status(201).send({
                success:true,
                message:"Product added Successfully",
                product,
            })
        }
        else{
            res.status(404).send({
                success:false,
                message:"Error",
            })
        }
        
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
    catch(err){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in getting Product',
            error
        })
    }
    
}

module.exports = {addProduct,getProduct};