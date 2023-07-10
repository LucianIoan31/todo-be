const Pool = require('pg');

const pool = newPool({
  user: 'postgres',
  password: 'Superbeti123*#',
  host: 'localhost',
  port: 5432,
  database: 'todos'
});

module.exports = pool;