import express from 'express';
import cors from 'cors';
import employeeRoutes from './routes/employees';

const app = express();

// Use the dynamic PORT provided by Azure
const PORT = process.env.PORT || 80;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/employees', employeeRoutes);

// Start the server
if (!PORT) {
  throw new Error("PORT environment variable is not set.");
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});