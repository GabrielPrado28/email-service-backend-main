
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Inserindo dados na tabela reports
    await queryInterface.bulkInsert('reports', [
      {
        user_id: 1, // Referência a um usuário existente com id 1
        status: 'completed',
        email: 'report1@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2, // Referência a um usuário existente com id 2
        status: 'in_progress',
        email: 'report2@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1, // Referência a um usuário existente com id 1
        status: 'failed',
        email: 'report3@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Desfazendo a inserção
    await queryInterface.bulkDelete('reports', null, {});
  }
};
