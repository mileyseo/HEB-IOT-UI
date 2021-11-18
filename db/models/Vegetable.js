const connection = require("../connection");

const {
    bookshelf
} = connection();

const veges = bookshelf.model("Vegetables", {
    tableName: 'vegetables',
    idAttribute: 'itemNo'
})

module.exports = veges;