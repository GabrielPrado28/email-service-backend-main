const express = require('express');
const dotenv = require('dotenv');
import { resolve } from "path";
dotenv.config(); // Carregar variáveis de ambiente antes de qualquer configuração

const { connectDB, sequelize } = require('./config/database');
const emailRoutes = require('./routes/emailRoutes');
const errorHandler = require('./middleware/errorHandler');

// Inicializar o Express
const app = express();

// Middleware para JSON
app.use(express.json());

// Conectar ao banco de dados MariaDB e sincronizar os modelos
connectDB().then(() => {
    sequelize.sync()
        .then(() => console.log('Modelos sincronizados com o banco de dados.'))
        .catch(error => console.error('Erro ao sincronizar os modelos:', error));
});

// Rotas
app.use('/api/email', emailRoutes); // Usa as rotas de e-mail

// Middleware de tratamento de erros (colocar sempre após as rotas)
app.use(errorHandler);

// Inicializa o servidor
const PORT = process.env.PORT || 3307;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});