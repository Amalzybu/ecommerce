var express = require('express');
var router = express.Router();


/* GET home page. */
router.get(['/','/cart','/register','/login','/orderlist'], function(req, res, next) {
  res.render('index', { placeholder: 'Express' });
});

router.get('/checkout', function(req, res, next) {
  res.render('check-out', { placeholder: 'Express' });
});





module.exports = router;
