var express = require('express');
customer=require("./customer_app");
var router = express.Router();
const authJwt = require("../middleware/authJwt");

/* GET users listing. */


router.get('/orders',[authJwt.verifyToken],customer.allOrders);
router.post('/orders-details',[authJwt.verifyToken],customer.orderDetails);
router.post('/cart-checkout',[authJwt.verifyToken],customer.checkoutCart);
router.post('/signup',customer.customerSignUp);
router.post('/signin',customer.customerSignIn);












module.exports = router;
