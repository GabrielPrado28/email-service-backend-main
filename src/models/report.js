import Sequelize, { Model } from 'sequelize';

export default class Report extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users', // Nome da tabela referenciada
            key: 'id', // Chave primária da tabela referenciada
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
        status: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        email: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'reports',
        timestamps: true, // Adiciona os campos createdAt e updatedAt automaticamente
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}
