import pg from "pg";
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

const config = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
};

const pool = new Pool(config);

export default pool;