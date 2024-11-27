import Sequelize, { Model } from 'sequelize';

export default class Email extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        to: {
          type: Sequelize.STRING(100),
          allowNull: false,
          validate: {
            isEmail: {
              msg: 'O destinatário deve ser um e-mail válido.',
            },
          },
        },
        from: {
          type: Sequelize.STRING(100),
          allowNull: false,
          validate: {
            isEmail: {
              msg: 'O remetente deve ser um e-mail válido.',
            },
          },
        },
        subject: {
          type: Sequelize.STRING(255),
          allowNull: false,
          validate: {
            len: {
              args: [1, 255],
              msg: 'O assunto deve ter entre 1 e 255 caracteres.',
            },
          },
        },
        body: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        status: {
          type: Sequelize.ENUM('pending', 'sent', 'failed'),
          defaultValue: 'pending',
        },
        sentAt: {
          type: Sequelize.DATE,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'emails',
        timestamps: true, // Adiciona automaticamente os campos createdAt e updatedAt
      }
    );
    return this;
    
  }
  
}
