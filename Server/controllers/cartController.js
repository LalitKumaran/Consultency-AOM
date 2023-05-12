const cartModel = require('../models/cartModel')
const productModel = require('../models/productModel')
const userModel = require('../models/userModel')
const historyModel = require('../models/historyModel')

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
            var amt = usercart.amount+product.price
            const cart = await cartModel.updateOne({user:uid},{$addToSet:{products:product}},{upsert:true},{amount:amt})
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
    // console.log(req)
    const {uid} = req.body
    // console.log(uid)
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
const checkoutCart = async(req,res)=> {
    console.log("server",req.body)
    try{
        const {uid}  = req.body

        const usercart = await cartModel.findOne({user:uid})

        const userhistory = await historyModel.findOne({user:uid})

        if(!userhistory){
            await new historyModel({user:uid},{products:[]}).save()
        }

        if(usercart){
            console.log(usercart.products)
            await historyModel.updateOne({ user: uid }, {$addToSet:{orders:usercart.products}},{upsert:true})
            await cartModel.updateOne({ user: uid }, {products:[]});
            const updatedCart = await cartModel.findOne({ user: uid });

              res.status(200).send({
                success:true,
                message:"Checked out successfully",
                updatedCart
              })
        }
        else{
            res.status(304).send({
                success:false,
                message:"Cart doesn't exists",
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

const orderHistory = async (req,res) => {
    const uid = req.params.uid

    const user = await userModel.findOne({email:uid})

    console.log(user)

    if(user){
        const userHistory = await historyModel.findOne({user:uid})

        console.log(userHistory)
        res.status(200).send({
            success:true,
            message:"Order history gathered",
            history: userHistory
        })
    }
    else{
        res.status(404).send({
            success:false,
            message:"User Not Found",
        })
    }
}

module.exports = {addItem,getCart,removeItem,checkoutCart,orderHistory};