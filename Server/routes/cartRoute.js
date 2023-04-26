const express = require('express')
const {addItem,getCart} = require('../controllers/cartController.js')
const router = express.Router()

router.post('/new/:uid/:pid',addItem);

router.get('/user/:uid',getCart);


module.exports = router;