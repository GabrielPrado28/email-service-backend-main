import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      group_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    }, {
      sequelize,
      tableName: 'users', // Certifique-se de que o nome da tabela está correto
    });
    return this;
  }
}
