const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    user : {
        type : String,
        required : true,
    },

})

mongoose.model = momgoose.model("cart",cartSchema);