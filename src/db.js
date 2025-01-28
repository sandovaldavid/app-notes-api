const { Pool } = require("pg");
const { db } = require("./config");

const pool = new Pool(db);

module.exports = pool;
