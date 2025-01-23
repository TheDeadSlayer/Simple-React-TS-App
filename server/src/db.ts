import { Pool } from 'pg';
import fs from 'fs';
import path from 'path';

// Optional: Load SSL certificate if required by your setup
// const sslCert = fs.readFileSync(path.resolve(__dirname, 'path/to/server-ca.pem')).toString();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  ssl: {
    rejectUnauthorized: true, // Ensures the server certificate is verified
    // Uncomment and set the path if you have a CA certificate
    // ca: sslCert,
    // If you're using self-signed certificates or testing, you might set it to false
    // Note: Setting rejectUnauthorized to false is not recommended for production
    // rejectUnauthorized: false,
  },
});

// Debugging: Log database connection details
if (
  !process.env.DB_USER ||
  !process.env.DB_HOST ||
  !process.env.DB_NAME ||
  !process.env.DB_PASSWORD ||
  !process.env.DB_PORT
) {
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