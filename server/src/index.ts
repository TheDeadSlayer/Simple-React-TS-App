// server/src/index.ts
import express from 'express';
import cors from 'cors';
import employeeRoutes from './routes/employees';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/employees', employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
