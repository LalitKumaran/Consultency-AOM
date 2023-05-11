const express = require('express')
const {addItem,getCart,removeItem,checkoutCart,orderHistory} = require('../controllers/cartController.js')
const router = express.Router()

router.post('/new',addItem);

router.post('/user/find',getCart);

router.put('/user/remove',removeItem);

router.put('/user/checkout',checkoutCart);

router.get('/user/history/:uid',orderHistory);

module.exports = router;