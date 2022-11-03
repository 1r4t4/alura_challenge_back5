'use strict';
module.exports = (sequelize, DataTypes) => {
  const Videos = sequelize.define('Videos', {
    titulo: {
      type: DataTypes.STRING,
     allowNull: false,
      validate: {
        notNull : true
      },
      validate: {
        funcaoValidadora: function(dado) {
          if (dado.length > 30 ) throw new Error ('limite máximo de caracteres excedido: 30')
        }
    }        
  },

  descricao: {
    type: DataTypes.STRING,
    validate: {
      funcaoValidadora: function(dado) {
        if (dado.length > 30 ) throw new Error ('limite máximo de caracteres excedido: 30')
      }
    }
  },
  
  url:{
    type: DataTypes.STRING,
    validate: {
        funcaoValidadora: function(dado) {
          if (dado.length > 30 ) throw new Error ('limite máximo de caracteres excedido: 30')
        }     
      }
    },

  categorias:{
    type: DataTypes.INTEGER,
    isNumeric: true,
    },

  }, {});
  Videos.associate = function(models) {
    Videos.belongsTo(models.Categorias, {
      foreignKey: 'Id'
    })
  };
  return Videos;
};


  // eu gostaria que fosse assim:
  // notNull: {
  //   args: true,
  // msg: 'esse campo é obrigatório'
  // mas estou recebendo erro por conta não estar conseguindo habilitar allowNull:false