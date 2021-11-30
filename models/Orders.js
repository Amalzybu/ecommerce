const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate({ User }) {
    //   // define association here
    //   this.belongsTo(User)
    // }

    static associate({ OrderItems }) {
      // define association here
      this.hasMany(OrderItems, { foreignKey: 'order_id' })
    }

  
  }
  Orders.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      total: {
        type: DataTypes.INTEGER,
      },
      city: {
        type: DataTypes.STRING,
        field: 'city'
      },
      district: {
        type: DataTypes.STRING,
        field: 'district'
      },
      pin: {
        type: DataTypes.STRING,
        field: 'pin'
      },
      landmark: {
        type: DataTypes.STRING,
        field: 'landmark'
      },
      state: {
        type: DataTypes.STRING,
        field: 'state'
      },
    },
    {
      sequelize,
      tableName: 'orders',
      modelName: 'Orders',
    }
  )
  return Orders
}


