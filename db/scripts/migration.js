const connection = require("../connection");
const { knex } = connection();

async function main(args) {
  const option = args[2];
  switch (option) {
    case "up":
      // itemName VARCHAR(50) NOT NULL,
      // aisleNo VARCHAR(20) NOT NULL,
      // sectionNo INT(4) NOT NULL,
      // shelfNo INT(4) NOT NULL,
      // quantity INT(4) NOT NULL,
      // PRIMARY KEY (itemNo)
      await knex.schema.createTable("Vegetables", (table) => {
        table.increments("itemNo").primary();
        table.string("itemName", 50);
        table.string("aisleNo", 20);
        table.integer("sectionNo");
        table.integer("shelfNo");
        table.integer("quantity");
      });
      break;
    case "down":
      await knex.schema.dropTable("Vegetables");
      break;
  }
  console.log("Yo we done with migration!!")
  process.exit(0);
}

main(process.argv);
