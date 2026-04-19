const sql = require("mssql");
require("dotenv").config();

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

const connectDB = async () => {
  try {
    console.log("DB bağlantısı deneniyor...");
    await sql.connect(dbConfig);
    console.log("SQL bağlantısı başarılı");
  } catch (error) {
    console.error("SQL bağlantı hatası FULL:");
    console.error(error);
  }
};

module.exports = { sql, connectDB };