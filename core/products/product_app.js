const {
  sequelize,
  User,
  Products,
  Post
} = require("../../models");
module.exports = {


  allProdducts: async (req, res) => {
    try {
      const products = await Products.findAll()

      return res.json({
        "status": 200,
        "message": "items fetched successfully",
        "data": products
      })
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        error: 'Something went wrong'
      })
    }
  }

}