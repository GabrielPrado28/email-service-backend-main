'use strict';

module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  }, {
    tableName: 'reports',
    timestamps: true,
  });

  Report.associate = (models) => {
    Report.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  };

  return Report;
};
