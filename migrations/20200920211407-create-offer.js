'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_price: {
        type: Sequelize.FLOAT
      },
      price_with_discount: {
        type: Sequelize.FLOAT
      },
      discount_percentage: {
        type: Sequelize.FLOAT
      },
      start_date: {
        type: Sequelize.STRING
      },
      enrollment_semester: {
        type: Sequelize.STRING
      },
      enabled: {
        type: Sequelize.BOOLEAN
      },
      courseId: {
        type: Sequelize.INTEGER
      },
      universityId: {
        type: Sequelize.INTEGER
      },
      campusId: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Offers');
  }
};