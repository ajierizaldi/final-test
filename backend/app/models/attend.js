'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class attend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, {
        foreignKey: 'userID',
        as: user
      })
    }
  }
  attend.init({
    attendID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    dateNow: DataTypes.DATE,
    checkIn: DataTypes.TIME,
    checkOut: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'attend',
    tablename: 'attend'
  });
  return attend;
};