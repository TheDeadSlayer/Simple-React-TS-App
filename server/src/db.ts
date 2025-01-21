// server/src/db.ts
import { Pool } from 'pg';

// Adjust these to match your environment or Docker Compose settings:
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'employeesdb',
  password: process.env.DB_PASSWORD || 'postgres',
  port: Number(process.env.DB_PORT) || 5432,
});

export default pool;
