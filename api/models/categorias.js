'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categorias = sequelize.define('Categorias', {
    título: {type: DataTypes.STRING,
      allowNull: false},
    cor:{type: DataTypes.STRING,
      allowNull: false}
  }, {});
  Categorias.associate = function(models) {
    Categorias.hasMany(models.Videos, {
      foreignKey: 'Id'
    })
  };
  return Categorias;
};