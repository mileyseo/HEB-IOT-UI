function createConnection() {
  const knex = require("knex")({
    client: "mysql",
    connection: {
      host: process.env.host || "127.0.0.1",
      port: process.env.port || "3306",
      user: process.env.user || "chaminda",
      password: process.env.password || "password",
      database: process.env.database || "test",
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
