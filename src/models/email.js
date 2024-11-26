import Sequelize, { Model } from 'sequelize';

export default class Email extends Model {
  static init(sequelize) {
    super.init({
      to: Sequelize.STRING,
      subject: Sequelize.STRING,
      body: Sequelize.TEXT,
      status: Sequelize.ENUM('pending', 'sent', 'failed'),
    }, {
      sequelize,
      modelName: 'Email',
      tableName: 'emails',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}
