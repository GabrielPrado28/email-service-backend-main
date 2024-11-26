import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Carregar variáveis de ambiente
dotenv.config();

// Configuração do Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME, // Nome do banco de dados
  process.env.DB_USER, // Usuário do banco
  process.env.DB_PASS, // Senha do banco
  {
    host: process.env.DB_HOST || 'localhost',  // Host do banco
    dialect: 'mariadb',  // Dialeto explicitamente configurado (mysql ou mariadb)
    port: process.env.DB_PORT || 3307,  // Porta do banco
    logging: false,  // Desabilitar logs de SQL
  }
);

export default sequelize;
