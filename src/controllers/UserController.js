import User from '../models/user.js';

class UserController {
  // Método para criar um novo usuário
  async store(req, res) {
    try {
      // Validação manual dos campos
      const { name, email, group_id } = req.body;
      if (!name || !email || !group_id) {
        return res.status(400).json({ errors: ['Todos os campos são obrigatórios.'] });
      }

      // Criação do usuário no banco de dados
      const novoUser = await User.create({ name, email, group_id });
      return res.status(201).json(novoUser); // Retorna o objeto completo ou apenas os campos necessários
    } catch (e) {
      return res.status(400).json({
        errors: e.errors?.map((err) => err.message) || ['Erro ao criar usuário.'],
      });
    }
  }

  // Método para listar todos os usuários
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'email', 'group_id'] });
      return res.json(users);
    } catch (e) {
      return res.status(500).json({ errors: ['Erro ao buscar usuários.'] });
    }
  }

  // Método para buscar um único usuário por ID
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ errors: ['Usuário não encontrado.'] });
      }
      return res.json(user);
    } catch (e) {
      return res.status(500).json({ errors: ['Erro ao buscar usuário.'] });
    }
  }

  // Método para atualizar um usuário
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(404).json({ errors: ['Usuário não encontrado.'] });
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors?.map((err) => err.message) || ['Erro ao atualizar usuário.'],
      });
    }
  }

  // Método para deletar um usuário
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(404).json({ errors: ['Usuário não encontrado.'] });
      }

      await user.destroy();
      return res.status(204).send(); // Status 204 indica sucesso sem conteúdo
    } catch (e) {
      return res.status(500).json({ errors: ['Erro ao deletar usuário.'] });
    }
  }
}

export default new UserController();
