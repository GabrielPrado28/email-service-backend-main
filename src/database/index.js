import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import User from '../models/user.js';
import Email from '../models/email.js';

// Carregar variáveis de ambiente do .env
dotenv.config();

// Inicializar o Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME, // Nome do banco
  process.env.DB_USER, // Usuário
  process.env.DB_PASS, // Senha
  {
    host: process.env.DB_HOST,       // Host do banco
    dialect: process.env.DB_DIALECT, // Dialeto (mysql, mariadb, etc.)
    port: process.env.DB_PORT,       // Porta
    logging: false,                  // Desabilitar logs do Sequelize
  }
);

// Inicializar os modelos
User.init(sequelize);
Email.init(sequelize);

// Configurar associações entre os modelos, se existirem
User.associate && User.associate(sequelize.models);
Email.associate && Email.associate(sequelize.models);

// Exportar a instância do Sequelize
export { sequelize };
export default sequelize;

sequelize.authenticate()
  .then(() => console.log('Conexão com o banco de dados bem-sucedida!'))
  .catch((err) => console.error('Erro ao conectar ao banco de dados:', err.message));
