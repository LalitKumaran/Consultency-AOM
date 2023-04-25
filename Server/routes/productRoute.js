const express = require('express')
const {addProduct,getProduct} = require('../controllers/productController.js')
const router = express.Router()

router.post('/product/new',addProduct);

router.post('/product/:pid',getProduct);

module.exports = router;