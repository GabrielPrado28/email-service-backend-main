import { Router } from 'express';
import ReportController from '../controllers/ReportController.js';

const router = new Router();

router.get('/', ReportController.index);  // Rota para listar relatórios
router.post('/', ReportController.store); // Rota para criar um relatório

export default router; // Exportação padrão
