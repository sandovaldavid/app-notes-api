const { config } = require("dotenv");
config();

module.exports = {
  db: {
    connectionString: process.env.POSTGRES_URL,
    ssl: process.env.NODE_ENV === 'production' ? {
      rejectUnauthorized: true
    } : false
  }
};
