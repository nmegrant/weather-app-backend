"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class searchResults extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  searchResults.init(
    {
      location: { type: DataTypes.STRING, unique: true },
      numSearches: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "searchResults",
    }
  );
  return searchResults;
};
