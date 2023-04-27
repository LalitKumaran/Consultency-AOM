const cartModel = require('../models/cartModel')
const productModel = require('../models/productModel')
const userModel = require('../models/userModel')

const addItem = async(req,res) => {
    try{
    const {uid,pid} = req.body

    const user = await userModel.findOne({_id:uid})

    if(user){
        const product = await productModel.findOne({_id:pid})
        if(product){
            const cart = await new cartModel({user:uid,products:product}).save()
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
    else{
        res.status(404).send({
            success:false,
            message:"User not found",
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
    const uid = req.params.uid

    const cart = await cartModel.findOne({uid})

    if(cart){
        res.status(200).send({
            success:true,
            message:"Cart found",
            cart,
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

module.exports = {addItem,getCart};