const cartModel = require('../models/cartModel')
const productModel = require('../models/productModel')
const userModel = require('../models/userModel')

const addItem = async(req,res) => {
    try{
    const {uid,pid} = req.body

    const user = await userModel.findOne({uid})

    const usercart = await cartModel.findOne({user:uid})

    if(!usercart){
        await new cartModel({user:uid},{products:[]}).save()
    }
    
    const product = await productModel.findOne({_id:pid})

        if(product){
            const cart = await cartModel.updateOne({user:uid},{$addToSet:{products:product}},{upsert:true})
            res.status(201).send({
                success:true,
                message:"Added to cart",
                cart,
            })

        }
        else{
            res.status(404).send({
                success:false,
                message:"Product not found",
            })
        }
}
catch(error){
    res.status(500).send({
        success:false,
        message:"Internal Error",
        error,
    })
}
}

const getCart = async (req,res) => {
    try{
    console.log(req)
    const {uid} = req.body
    console.log(uid)
    const usercart = await cartModel.findOne({user:uid})
    console.log(usercart)
    if(usercart){
        res.status(200).send({
            success:true,
            message:"Cart found",
            usercart,
        })
    }
    else{
        res.status(304).send({
            success:false,
            message:"Cart not exists",
        })
    }
    
}
catch(error){
    res.status(500).send({
        success:false,
        message:"Internal Error",
        error
    })
}
}

const removeItem = async(req,res)=> {
    try{
        const {uid,pid}  = req.body

        const usercart = await cartModel.findOne({user:uid})

        if(usercart){
            const products = usercart.products.filter(p => p._id.toString() !== pid);
            await cartModel.updateOne({ user: uid }, { products });

            const updatedCart = await cartModel.findOne({ user: uid });

              res.status(200).send({
                success:true,
                message:"Product Removed from cart",
                updatedCart
              })
        }
        else{
            res.status(304).send({
                success:false,
                message:"Cart not exists",
            })
        }

    }
    catch{
        res.status(500).send({
            success:false,
            message:"Internal Error",
            error
        })
    }
}
module.exports = {addItem,getCart,removeItem};