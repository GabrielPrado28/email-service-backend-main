import Email from '../models/email';

class EmailController {
  // Criação de um novo e-mail
  async store(req, res) {
    try {
      const novoEmail = await Email.create(req.body);
      const { id, to, from, subject, body, status, sentAt } = novoEmail;
      return res.json({ id, to, from, subject, body, status, sentAt });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Lista todos os e-mails
  async index(req, res) {
    try {
      const emails = await Email.findAll({
        attributes: ['id', 'to', 'from', 'subject', 'body', 'status', 'sentAt'],
      });
      return res.json(emails);
    } catch (e) {
      return res.json(null);
    }
  }

  // Mostra um e-mail específico pelo ID
  async show(req, res) {
    try {
      const email = await Email.findByPk(req.params.id);

      if (!email) {
        return res.status(404).json({
          errors: ['E-mail não encontrado'],
        });
      }

      const { id, to, from, subject, body, status, sentAt } = email;
      return res.json({ id, to, from, subject, body, status, sentAt });
    } catch (e) {
      return res.json(null);
    }
  }

  // Atualiza os dados de um e-mail existente
  async update(req, res) {
    try {
      const email = await Email.findByPk(req.params.id);

      if (!email) {
        return res.status(400).json({
          errors: ['E-mail não encontrado'],
        });
      }

      const novosDados = await email.update(req.body);
      const { id, to, from, subject, body, status, sentAt } = novosDados;
      return res.json({ id, to, from, subject, body, status, sentAt });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Exclui um e-mail existente
  async delete(req, res) {
    try {
      const email = await Email.findByPk(req.params.id);

      if (!email) {
        return res.status(400).json({
          errors: ['E-mail não encontrado'],
        });
      }

      await email.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new EmailController();
