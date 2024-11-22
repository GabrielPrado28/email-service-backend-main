'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'users',
    timestamps: true,
  });

  User.associate = (models) => {
    User.hasMany(models.Report, { foreignKey: 'user_id', as: 'reports' });
  };

  return User;
};
