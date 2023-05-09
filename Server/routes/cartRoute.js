const express = require('express')
const {addItem,getCart,removeItem,checkoutCart} = require('../controllers/cartController.js')
const router = express.Router()

router.post('/new',addItem);

router.post('/user/find',getCart);

router.put('/user/remove',removeItem);

router.put('/user/checkout',checkoutCart)

// router.put('/user/checkout',checkout)
module.exports = router;