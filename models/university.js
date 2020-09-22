'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class University extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //University.hasMany(models.Course, {as: 'courses'})
      //University.hasMany(models.Offer, {as: 'offers'})
    }
  };
  University.init({
    name: DataTypes.STRING,
    score: DataTypes.FLOAT,
    logo_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'University',
  });
  return University;
};