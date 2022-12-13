const connection = require('../database');

const findAll = () => {
  return connection.database.query(`select * from users`);
}

const find = (id) => {
  return connection.database.query(`select * from  users where id = ?`, [
    id,
  ]);
}

const add = (user) => {
  return connection.database.query(
    `insert into users (email, password) values (?, ?)`,
    [user.email, user.password]
  );
}

const update = (user) => {
  return connection.database.query(
    `update users set email = ?, password = ? where id = ?`,
    [user.email, user.password, user.id]
  );

}

module.exports = {
  findAll,
  find,
  add,
  update,
}