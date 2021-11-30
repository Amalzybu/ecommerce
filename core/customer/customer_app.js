const { sequelize, User,Orders,OrderItems,Products, Post } = require("../../models");
const products = require("../../models/products");
const bcrypt = require("bcrypt");
const config = require("../../config/auth.config");
var jwt = require("jsonwebtoken");

module.exports = {


allOrders:async (req, res) => {
    try {
      const products = await User.findOne({
        where:{
          id: req.userId
        },
        include: 'orders',
      })
  
      return res.json({"status":200,"message":"items fetched successfully","data":products})
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }},




orderDetails:async (req, res) => {
      try {
        const products = await Orders.findOne({
          where:{
            id:req.query.id,
          },
          include:[
            {
               model: OrderItems,
               include: [{
                  model: Products,
                  required: true
                }]
            }
          ]
        })
    
        return res.json({"status":200,"message":"orders fetched successfully","data":products})
      } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
      }},




checkoutCart:async (req, res) => {
  try {
   
    data=req.body.data
    let arr = [];

    arr=data.map(({id, quantity})=>(id))

    let products=await Products.findAll({
      where:{
        id:arr
      },
     
    })

    total=0
    items= await products.map((element)=>{
      var filtered =  data.find(a => a.id === element.id);
      var p ={}
      p.quantity=filtered.quantity
      p.price=element.price
      p.item_id=element.id
      total+=element.price*filtered.quantity
      return p;
     
    })
    
    order =await Orders.create({
              user_id: req.query.id,
              total: total,
              city: req.body.city,
              district: req.body.district,
              pin: req.body.pin,
              landmark: req.body.landmark,
              state:req.body.state,
          })
   
    items=items.map(v => ({...v, order_id: order.id}))
    OrderItems.bulkCreate(items)
    
    return res.json({"status":200,"message":"orders fetched successfully","data":items,"total":total,'order':order})
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }},  




customerSignUp:async (req,res)=>{
  try {

    var salt = await bcrypt.genSalt(10);
    user =await User.create({
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, salt),
      role:"customer",
    
    })
  return res.json({"status":200,"message":"user signed successfully","data":user})
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
},

customerSignIn: async (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

     
        res.status(200).send({
          id: user.id,
          email: user.email,
          accessToken: token
        });
    
    })
    .catch(err => {
      console.log("sssss"+err)
      res.status(500).send({ message: err.message });
    });
}


}