const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Text extends Model {}

// define table columns and configuration
Text.init(
    
    {

      username: {
        type: DataTypes.STRING,
        allowNull: false
      },

      text: {
        type: DataTypes.STRING,
        allowNull: false,
       unique: true,
       }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'Text'
    }
  );

module.exports = Text;