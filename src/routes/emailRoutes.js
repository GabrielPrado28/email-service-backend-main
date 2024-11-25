import { Router } from 'express';
import emailController from '../controllers/EmailController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Rota para envio de e-mails (sem login necessário)
router.post('/', emailController.sendEmail);

// Rota para obter todos os e-mails (apenas usuários autenticados)
router.get('/', loginRequired, emailController.getEmails);

export default router;

/*
sendEmail -> envia um novo e-mail -> POST
getEmails -> lista todos os e-mails -> GET
*/
