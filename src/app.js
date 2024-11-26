import { fileURLToPath } from 'url';  // Adicione isso para poder usar import.meta.url
import { dirname, resolve } from 'path'; // Importar os métodos do path

// Simulando __dirname em ES Modules
const __dirname = dirname(fileURLToPath(import.meta.url));

import './database/index.js';


import express from 'express';

import userRoutes from './routes/userRoutes.js';
import emailRoutes from './routes/emailRoutes.js';


class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {   
    this.app.use('/emails/', emailRoutes);
    this.app.use('/users/', userRoutes);
  }
}

export default new App().app;
