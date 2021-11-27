var express = require('express');
product=require("./product_app");
var router = express.Router();

/* GET users listing. */


router.get('/products',product.allProdducts);



module.exports = router;
