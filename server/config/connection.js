import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

let config;

if (process.env.NODE_ENV === 'production') {
  config = {
    connectionString: process.env.PG_RENDER_CONNECTION_STRING,
  };
} else {
  config = {
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
  };
}

const pool = new Pool(config);

export default pool;
