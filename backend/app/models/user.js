'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.attend, {
        foreignKey: 'userID',
        as: attendUser
      })
      this.hasMany(models.reimbursement, {
        foreignKey: 'userID',
        as: reimbursementUser
      })
      this.hasMany(models.overtime, {
        foreignKey: 'userID',
        as: overtimeUser
      })
    }
  }
  user.init({
    userID: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM('employee', 'hr')
  }, {
    sequelize,
    modelName: 'user',
    tableName: 'user',
  });
  return user;
};