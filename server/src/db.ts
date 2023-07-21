import Pool from "pg-pool";
import config from 'config'
import { DbConfig } from "./models/db.js";

const dbConfig: DbConfig = config.get('dbcfg');
export const db = new Pool({
  user: dbConfig.user,
  host: dbConfig.host,
  database: dbConfig.database,
  password: dbConfig.password,
  port: parseInt(dbConfig.port)
});

// This should be used in a different fashion to verify a valid database
// and if not, properly sync the database.
export const initdb = async () => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(30) UNIQUE NOT NULL,
      email VARCHAR(50) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );
    CREATE INDEX ON users (username);
  `);
}