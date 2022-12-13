const connection = require('../database');

const findAll = () => {
  return connection.database.query(`select * from users`);
}

const find = (id) => {
  return connection.database.query(`select * from  users where id = ?`, [
    id,
  ]);
}

module.exports = {
  findAll,
  find
}