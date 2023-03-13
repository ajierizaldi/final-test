'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reimbursement extends Model {
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
  reimbursement.init({
    reimbursementID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'userID'
      }
    },
    dateNow: DataTypes.DATE,
    balance: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    status: DataTypes.ENUM('pending', 'approved', 'rejected')
  }, {
    sequelize,
    modelName: 'reimbursement',
    tableName: 'reimbursement',
  });
  return reimbursement;
};