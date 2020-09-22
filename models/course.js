'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.belongsTo(models.Campus,  {
        foreignKey: "campusId",
        as: "Campus",
      });
      Course.belongsTo(models.University,{
        foreignKey: "universityId",
        as: "Universities",
      });
      //Course.hasMany(models.Offer, {as: 'offers'})
    }
  };
  Course.init({
    name: DataTypes.STRING,
    kind: DataTypes.STRING,
    level: DataTypes.STRING,
    shift: DataTypes.STRING,
    universityId: DataTypes.INTEGER,
    campusId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};