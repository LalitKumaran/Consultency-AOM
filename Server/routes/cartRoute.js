const express = require('express')
const {addItem,getCart} = require('../controllers/cartController.js')
const router = express.Router()

router.post('/new',addItem);

router.get('/user/:id',getCart);


module.exports = router;