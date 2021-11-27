const { sequelize, User,Orders,OrderItems,Products, Post } = require("../../models");
const products = require("../../models/products");
const bcrypt = require("bcrypt");

module.exports = {


allOrders:async (req, res) => {
    try {
      const products = await User.findAll({
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

    arr=data.map(({id, count})=>(id))

    let products=await Products.findAll({
      where:{
        id:arr
      },
     
    })

    total=0
    items= await products.map((element)=>{
      var filtered =  data.filter(a => a.id == element.id)[0];
      var p ={}
      p.quantity=filtered.count
      p.price=element.price
      p.item_id=element.id
      total+=element.price*filtered.count
      return p;
     
    })
    
    order =await Orders.create({
              user_id: 1,
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
}

}