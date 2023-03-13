'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class overtime extends Model {
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
  overtime.init({
    overtimeID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    dateNow: DataTypes.DATE,
    reason: DataTypes.TEXT,
    status: DataTypes.ENUM('pending', 'approved', 'rejected')
  }, {
    sequelize,
    modelName: 'overtime',
    tableName: 'overtime',
  });
  return overtime;
};