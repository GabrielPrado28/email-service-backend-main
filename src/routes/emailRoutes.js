import { Router } from 'express';
import { sendEmail, getEmails } from '../controllers/EmailController.js'; // Correção aqui para importar como nomeado

import loginRequired from '../middlewares/loginRequired.js';

const router = new Router();

// Rota para envio de e-mails (sem login necessário)
router.post('/', sendEmail); // Função de enviar e-mail

// Rota para obter todos os e-mails (apenas usuários autenticados)
router.get('/', loginRequired, getEmails);

export default router;
