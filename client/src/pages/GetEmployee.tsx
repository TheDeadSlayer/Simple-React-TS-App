import React, { useState } from 'react';

interface Employee {
  id: string;
  name: string;
  role: string;
}

const GetEmployee: React.FC = () => {
  const [searchId, setSearchId] = useState('');
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGetData = async () => {
    setError(null); // Clear any previous error
    setEmployee(null); // Clear previously shown data

    try {
      const response = await fetch(`http://localhost:4000/api/employees/${searchId}`);
      if (!response.ok) {
        // 404 or 500, etc.
        const data = await response.json().catch(() => null);
        const message = data?.message || 'Failed to fetch employee.';
        setError(message);
      } else {
        const data: Employee = await response.json();
        setEmployee(data);
      }
    } catch (err) {
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
      <h1>Get Employee</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Employee ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleGetData}>Get Data</button>
      </div>

      {/* Show error if any */}
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}

      {/* If employee data is fetched, show read-only fields */}
      {employee && (
        <div style={{ marginTop: '1rem' }}>
          <div>
            <label>ID:</label>
            <input type="text" value={employee.id} readOnly />
          </div>
          <div>
            <label>Name:</label>
            <input type="text" value={employee.name} readOnly />
          </div>
          <div>
            <label>Role:</label>
            <input type="text" value={employee.role} readOnly />
          </div>
        </div>
      )}
    </div>
  );
};

export default GetEmployee;
