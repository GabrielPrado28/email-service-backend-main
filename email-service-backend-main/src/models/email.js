const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Definição do modelo de E-mail
const Email = sequelize.define('Email', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    to: {
        type: DataTypes.STRING,
        allowNull: false
    },
    from: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('pending', 'sent', 'failed'),
        defaultValue: 'pending'
    },
    sentAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
}, {
    timestamps: true,  // Sequelize adicionará automaticamente createdAt e updatedAt
    tableName: 'emails' // Nome da tabela no banco de dados
});

module.exports = Email;
