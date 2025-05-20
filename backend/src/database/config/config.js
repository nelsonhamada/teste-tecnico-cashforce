const config = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'cashforce_v3',
  host: process.env.MYSQL_HOST || 'database',
  dialect: 'mysql', 
};

module.exports = {
  development: config,
  test: config,
  production: config,
};