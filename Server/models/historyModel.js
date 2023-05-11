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
        data : Buffer,
        contentType : String,
    }
})

const historySchema = new mongoose.Schema({
    user : {
        type : String,
        required : true,
        unique: true
    },
    history : [[productSchema]]
})

module.exports = mongoose.model('history',historySchema);