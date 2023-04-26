const express = require('express')
const {addProduct,getProduct,allProducts} = require('../controllers/productController.js')
const router = express.Router()

router.post('/new',addProduct);

router.get('/find/:pid',getProduct);

router.get('/all',allProducts);

module.exports = router;