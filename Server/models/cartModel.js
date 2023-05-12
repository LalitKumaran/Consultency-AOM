const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true,
    },
    category : {
        type : String,
        required : true,
    },
    image : {
        type : String,
    }
})

const cartSchema = mongoose.Schema({
    user : {
        type : String,
        required : true,
        unique : true
    },
    products : [productSchema],
    amount : {
        type : Number,
        default : 0
    }
})

module.exports = mongoose.model("cart",cartSchema);