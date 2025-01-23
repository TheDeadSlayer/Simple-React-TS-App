import React, { useState } from 'react';

const AddEmployee: React.FC = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [employeeRole, setEmployeeRole] = useState('');

  // We'll store any error message here
  const [error, setError] = useState<string | null>(null);
  // Get API URL from environment variables
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear any previous error
    if (!apiUrl) {
      setError('API URL is not defined. Please check the environment configuration.');
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/employees`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: employeeId,
          name: employeeName,
          role: employeeRole,
        }),
      });

      if (!response.ok) {
        // Attempt to read the error message from the response
        const data = await response.json().catch(() => null);
        const message = data?.message || 'Failed to add employee.';
        setError(message);
      } else {
        // Success: clear fields
        alert('Employee added successfully!');
        setEmployeeId('');
        setEmployeeName('');
        setEmployeeRole('');
      }
    } catch (err) {
      // This typically means the request never reached the server (e.g. no connection)
      console.error(err);
      setError('Could not connect to the server. Please check your connection.');
    }
  };

  return (
    <div 
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            value={employeeRole}
            onChange={(e) => setEmployeeRole(e.target.value)}
          />
        </div>
        <button type="submit">Add Employee</button>
      </form>

      {/* Show any error message in red */}
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
};

export default AddEmployee;
