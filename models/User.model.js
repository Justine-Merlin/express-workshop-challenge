const connection = require('../database');

const findAll = () => {
  return connection.database.query(`select * from users`);
}

module.exports = {
  findAll
}