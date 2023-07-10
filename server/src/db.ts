import Pool from "pg-pool";
import { dbcfg } from "./config.js";
import { userSchema } from "./models/user.js";

export const db = new Pool(dbcfg);

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