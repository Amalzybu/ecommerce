const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate({ Post }) {
    //   // define association here
    //   this.hasMany(Post, { foreignKey: 'userId', as: 'posts' })
    // }
    static associate({ OrderItems }) {
      // define association here
      this.hasMany(OrderItems, { foreignKey: 'item_id' })
    }

    toJSON() {
      return { ...this.get(), id: undefined }
    }
  }
  Products.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'products',
      modelName: 'Products',
    }
  )
  return Products
}

