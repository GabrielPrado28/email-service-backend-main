module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',  // Nome da tabela de referência
        key: 'id'        // Chave primária da tabela de referência
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
    }
  }, {
    tableName: 'reports',  // Nome da tabela no banco de dados
    timestamps: false      // Desativa timestamps automáticos (createdAt, updatedAt)
  });

  Report.associate = (models) => {
    Report.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  return Report;
};
