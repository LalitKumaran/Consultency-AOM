const mongoose = require('mongoose')

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

const tempcartSchema = new mongoose.Schema({
    products : [productSchema],

    amount : {
        type : Number,
        default : 0
    }
})

const historySchema = new mongoose.Schema({
    user : {
        type : String,
        required : true,
        unique: true
    },
    orders : [[tempcartSchema]]
})

module.exports = mongoose.model('history',historySchema);