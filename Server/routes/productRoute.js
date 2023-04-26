const express = require('express')
const {addProduct,getProduct} = require('../controllers/productController.js')
const router = express.Router()

router.post('/product/new',addProduct);

router.get('/product/:pid',getProduct);

router.get('/product/all',getProduct);

module.exports = router;