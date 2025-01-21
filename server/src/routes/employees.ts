// server/src/routes/employees.ts
import { Router } from 'express';
import pool from '../db';

const router = Router();

// Create/Add a new employee
router.post('/', async (req, res) => {
  const { id, name, role } = req.body;
  try {
    await pool.query(
      'INSERT INTO employees (id, name, role) VALUES ($1, $2, $3)',
      [id, name, role]
    );
    res.status(201).json({ message: 'Employee added' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding employee' });
  }
});

// Get an employee by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      'SELECT id, name, role FROM employees WHERE id = $1',
      [id]
    );
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving employee' });
  }
});

export default router;
