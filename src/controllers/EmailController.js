import Email from '../models/email.js';

// Função para enviar e-mails
export async function sendEmail(req, res) {
    const { to, subject, body } = req.body;
    try {
        const email = await Email.create({ to, from: process.env.EMAIL_FROM, subject, body, status: 'pending' });
        res.status(200).json({ message: 'E-mail enviado com sucesso!', email });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao enviar o e-mail.', error });
    }
}

// Função para obter todos os e-mails
export async function getEmails(req, res) {
    try {
        const emails = await Email.findAll();  // Buscar todos os e-mails no banco
        res.status(200).json(emails);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar e-mails.', error });
    }
}
