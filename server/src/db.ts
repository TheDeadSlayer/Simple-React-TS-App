import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'employeesdb',
  password: process.env.DB_PASSWORD || 'postgres',
  port: Number(process.env.DB_PORT) || 5432,
});

// Debugging: Log database connection details
if (!process.env.DB_USER || !process.env.DB_HOST || !process.env.DB_NAME || !process.env.DB_PASSWORD || !process.env.DB_PORT) {
  console.error('One or more environment variables for the database connection are missing!');
  console.error({
    DB_USER: process.env.DB_USER,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT,
  });
} else {
  console.log('Database environment variables loaded successfully.');
}

export default pool;