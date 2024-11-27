import Report from '../models/report.js';

class ReportController {
  async index(req, res) {
    try {
      const reports = await Report.findAll();
      res.json(reports);
    } catch (e) {
      res.status(500).json({ message: 'Erro ao buscar relatórios' });
    }
  }

  async store(req, res) {
    try {
      const report = await Report.create(req.body);
      res.status(201).json(report);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const report = await Report.findByPk(req.params.id);
      if (!report) {
        return res.status(404).json({ message: 'Relatório não encontrado' });
      }
      res.json(report);
    } catch (e) {
      res.status(500).json({ message: 'Erro ao buscar relatório' });
    }
  }

  async update(req, res) {
    try {
      const report = await Report.findByPk(req.params.id);
      if (!report) {
        return res.status(404).json({ message: 'Relatório não encontrado' });
      }
      const updated = await report.update(req.body);
      res.json(updated);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const report = await Report.findByPk(req.params.id);
      if (!report) {
        return res.status(404).json({ message: 'Relatório não encontrado' });
      }
      await report.destroy();
      res.json({ message: 'Relatório excluído com sucesso' });
    } catch (e) {
      res.status(500).json({ message: 'Erro ao excluir relatório' });
    }
  }
}

export default new ReportController();
