const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class OrderItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Products
    }) {
      // define association here
      this.belongsTo(Products, {
        foreignKey: 'item_id'
      });
    }

  }
  
  OrderItems.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
    },
    item_id: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    tableName: 'order_items',
    modelName: 'OrderItems',
  })
  return OrderItems
}