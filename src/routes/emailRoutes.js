const express = require('express');
const { sendEmail, getEmails } = require('../controllers/emailController');
const User = require('../models/user'); // Importar o modelo de teste

const router = express.Router();

// Definir rotas e associá-las aos controladores
router.post('/send', sendEmail); // Rota para enviar e-mails
router.get('/all', getEmails);    // Rota para obter todos os e-mails

// Rota temporária para teste de banco de dados
router.post('/test-user', async (req, res) => {
  try {
    const user = await User.create({
      name: 'Test User',
      email: 'test@example.com',
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

module.exports = router;
