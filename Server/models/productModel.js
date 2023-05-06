const mongoose = require("mongoose")

// const imageSchema = new mongodb.Schema({
//     filename: { type: String, required: true },
//     contentType: { type: String, required: true },
//     uploadDate: { type: Date, default: Date.now },
//     length: { type: Number, required: true }
//   });
  

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
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

module.exports = mongoose.model('products',productSchema);