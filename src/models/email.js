import Sequelize, { Model } from 'sequelize';

export default class Email extends Model {
  static init(sequelize) {
    super.init({
      to: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Destinatário inválido',
          },
        },
      },
      from: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Remetente inválido',
          },
        },
      },
      subject: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'O assunto deve ter entre 1 e 255 caracteres',
          },
        },
      },
      body: {
        type: Sequelize.TEXT,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 10000],
            msg: 'O corpo do e-mail deve ter entre 1 e 10000 caracteres',
          },
        },
      },
      status: {
        type: Sequelize.ENUM('pending', 'sent', 'failed'),
        defaultValue: 'pending',
        validate: {
          isIn: {
            args: [['pending', 'sent', 'failed']],
            msg: 'Status inválido',
          },
        },
      },
      sentAt: {
        type: Sequelize.DATE,
        defaultValue: null,
        validate: {
          isDate: {
            msg: 'Data de envio inválida',
          },
        },
      },
    }, {
      sequelize,
    });

    return this;
  }
}
