'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Offer.belongsTo(models.Course,  {
        foreignKey: "courseId",
        as: "Course",
      });
      Offer.belongsTo(models.Campus,  {
        foreignKey: "campusId",
        as: "Campus",
      });
      Offer.belongsTo(models.University,{
        foreignKey: "universityId",
        as: "Universities",
      });
    }
  };
  Offer.init({
    full_price: DataTypes.FLOAT,
    price_with_discount: DataTypes.FLOAT,
    discount_percentage: DataTypes.FLOAT,
    start_date: DataTypes.STRING,
    enrollment_semester: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN,
    courseId: DataTypes.INTEGER,
    universityId: DataTypes.INTEGER,
    campusId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Offer',
  });
  return Offer;
};