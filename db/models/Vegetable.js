const connection = require("../connection");

const {
    bookshelf
} = connection();

const veges = bookshelf.model("Vegetables", {
    tableName: 'Vegetables',
    idAttribute: 'upc'
})

module.exports = veges;