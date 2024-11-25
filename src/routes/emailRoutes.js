import { Router } from 'express';
import emailController from '../controllers/EmailController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Rota para envio de e-mails (sem login necessário)
router.post('/', emailController.sendEmail);

// Rota para obter todos os e-mails (apenas usuários autenticados)
router.get('/', loginRequired, emailController.getEmails);

export default router;

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
  

/*
sendEmail -> envia um novo e-mail -> POST
getEmails -> lista todos os e-mails -> GET
*/
