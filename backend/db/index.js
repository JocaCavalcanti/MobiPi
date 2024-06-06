const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'unicap_connect',
  password: 'root',  //senha do PostgreSQL
  port: 5432,
});

module.exports = pool;
