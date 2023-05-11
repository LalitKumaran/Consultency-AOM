const express = require('express')
const {addProduct,getProduct,allProducts,updateProduct,deleteProduct} = require('../controllers/productController.js')
const router = express.Router()
const multer = require('multer')
let uuidv4 = require('uuid/v4')

const DIR = '../Client/public/pdts';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

router.post('/new',upload.single('image'),addProduct);

router.get('/find/:pid',getProduct);

router.get('/all',allProducts);

router.put('/admin/update',updateProduct)

router.put('/delete/:pid',deleteProduct)

module.exports = router;