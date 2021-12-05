function createConnection() {
  const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "34.136.170.195",
      port: "3306",
      user: "newUser",
      password: "qwe1234",
      database: "cannedgoods",
      charset: "utf8",
    },
  });
  const bookshelf = require("bookshelf")(knex);

  return {
    knex, // DDL
    bookshelf, // DML
  };
}

module.exports = createConnection;
