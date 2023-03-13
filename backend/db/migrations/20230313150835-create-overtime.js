'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('overtimes', {
      overtimeID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'userID'
        }
      },
      dateNow: {
        type: Sequelize.DATE
      },
      reason: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.ENUM('pending', 'approved', 'rejected')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('overtimes');
  }
};