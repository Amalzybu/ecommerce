var express = require('express');
const { sequelize, User, Post } = require("../models");
var router = express.Router();


/* GET users listing. */
router.use((req,res,next)=>{
  console.log("hello user")
  next()
})

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll()

    return res.json(users)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }});



module.exports = router;
