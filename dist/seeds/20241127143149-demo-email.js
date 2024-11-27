'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('emails', [
      {
        to: 'john.doe@example.com',
        from: 'noreply@example.com',
        subject: 'Test Email 1',
        body: 'This is a test email.',
        status: 'sent',
        sentAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        to: 'jane.doe@example.com',
        from: 'noreply@example.com',
        subject: 'Test Email 2',
        body: 'This is another test email.',
        status: 'pending',
        sentAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('emails', null, {});
  },
};
