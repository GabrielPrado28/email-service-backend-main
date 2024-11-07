const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configurar a conexão com o banco de dados MariaDB
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mariadb',  // Especifica o uso de MariaDB
    logging: false,      // Desativar logs de SQL (opcional)
});

// Função para testar a conexão com o banco de dados
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado ao banco de dados MariaDB com sucesso.');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        process.exit(1);  // Encerrar a aplicação em caso de erro
    }
};

module.exports = { sequelize, connectDB };
