import Report from '../models/report';
import User from '../models/user';

class ReportController {
  // Store - Criação de um novo relatório
  async store(req, res) {
    try {
      const novoReport = await Report.create(req.body);
      const { id, user_id, status, email } = novoReport;
      return res.json({ id, user_id, status, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index - Listar todos os relatórios
  async index(req, res) {
    try {
      const reports = await Report.findAll({
        attributes: ['id', 'user_id', 'status', 'email'],
        include: {
          model: User,
          attributes: ['id', 'name', 'email'], // Relacionamento com a tabela users
        },
      });
      return res.json(reports);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show - Obter um relatório específico
  async show(req, res) {
    try {
      const report = await Report.findByPk(req.params.id, {
        attributes: ['id', 'user_id', 'status', 'email'],
        include: {
          model: User,
          attributes: ['id', 'name', 'email'], // Relacionamento com a tabela users
        },
      });

      if (!report) {
        return res.status(404).json({
          errors: ['Relatório não encontrado'],
        });
      }

      return res.json(report);
    } catch (e) {
      return res.json(null);
    }
  }

  // Update - Atualizar um relatório existente
  async update(req, res) {
    try {
      const report = await Report.findByPk(req.params.id);

      if (!report) {
        return res.status(404).json({
          errors: ['Relatório não encontrado'],
        });
      }

      const novosDados = await report.update(req.body);
      const { id, user_id, status, email } = novosDados;
      return res.json({ id, user_id, status, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete - Excluir um relatório existente
  async delete(req, res) {
    try {
      const report = await Report.findByPk(req.params.id);

      if (!report) {
        return res.status(404).json({
          errors: ['Relatório não encontrado'],
        });
      }

      await report.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new ReportController();