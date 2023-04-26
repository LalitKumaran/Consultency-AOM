const cartModel = require('../models/cartModel')
const productModel = require('../models/productModel')
const userModel = require('../models/userModel')

const addItem = () => {
    const uid = req.params.uid
    const pid = req.params.pid
}

const getCart = () => {
    const uid = req.params.uid
}

module.exports = {addItem,getCart};