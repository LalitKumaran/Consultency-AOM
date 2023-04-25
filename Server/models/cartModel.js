const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    user : {
        type : String,
        required : true,
    },
    products : [],

})

mongoose.model = momgoose.model("cart",cartSchema);