'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cnpjs = sequelize.define('cnpjs', {
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    companyType: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'cnpjs',
    timestamps: true,
  });

  return Cnpjs;
};