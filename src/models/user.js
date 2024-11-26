import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      email: Sequelize.STRING,
    }, {
      sequelize,
      modelName: 'User',
      tableName: 'users',
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Email, { foreignKey: 'user_id', as: 'emails' });
  }
}
