const express = require('express')
const {addProduct,getProduct,allProducts,updateproduct} = require('../controllers/productController.js')
const router = express.Router()

router.post('/new',addProduct);

router.get('/find/:pid',getProduct);

router.get('/all',allProducts);
router.put('/admin/update',updateproduct)
module.exports = router;