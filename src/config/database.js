require('dotenv').config();

module.exports = {
  /* SQLite */
  dialect: 'sqlite',
  storage: './db.sqlite',

  /* ALL */
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
