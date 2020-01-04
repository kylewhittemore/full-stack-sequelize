module.exports = (sequelize, DataTypes) => {
  const Sample = sequelize.define('Sample', {
    stuff: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
  });
  return Sample;
};
