const express = require('express')
const {addItem,getCart,removeItem} = require('../controllers/cartController.js')
const router = express.Router()

router.post('/new',addItem);

router.get('/user/find',getCart);

router.put('/user/remove',removeItem);


module.exports = router;