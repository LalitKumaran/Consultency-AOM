const userModel = require('../models/userModel.js')
const cartModel = require('../models/cartModel.js')
const {hashPassword,comparePassword} = require('../helper/authHelper.js')
const JWT = require('jsonwebtoken')

const registerController = async (req,res) => {
    try{
        const {name,email,password,phone,address} = req.body
        if(!name){
            res.send({error:"Name is required"})
        }
        if(!email){
            res.send({error:"Email is required"})
        }
        if(!password){
            res.send({error:"Password is required"})
        }
        if(!phone){
            res.send({error:"Phone is required"})
        }
        if(!address){
            res.send({error:"Address is required"})
        }

        const existinguser = await userModel.findOne({email})
        if(existinguser){
            return res.status(200).send({
                success:true,
                message: "User Already Exists please login"
            })
        }
        const hashedPassword = await hashPassword(password);

        const user = await new userModel({name,email:email.toLowerCase(),phone,address,password:hashedPassword}).save()

        const cart = await new cartModel({user:user._id}).save()
        
        const token = await JWT.sign({user_id:user._id,email},process.env.JWT_SECRET,{
            expiresIn: "2h",
        })

        user.token = token


        res.status(201).send({
            success:true,
            message:"User Registered Successfully",
            user,
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Registration',
            error
        })
    }

};

const loginController = async (req,res) => {
    try{
        const {email,password} = req.body

        console.log(email,password)
        
        if(!email || !password){
            return res.status(404).send({
                success:false,
                meassage:"Invalid Email or Password"
            })
        }

        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email not registered',
            })
        }

        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid Password"
            })
        }

        const token = await JWT.sign({user_id:user._id,email},process.env.JWT_SECRET,{
            expiresIn: "2h",
        })
        user.token = token

        res.status(200).send({
            success:true,
            message: 'Login Successful',
            user,
        })

    }catch(error){
        console.log(error)
        await res.status(500).send({
            success:false,
            message:'Erron in login',
            error,
        })
    }
}

module.exports = {registerController,loginController};

