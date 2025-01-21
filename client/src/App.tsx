// App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddEmployee from './pages/AddEmployee';
import GetEmployee from './pages/GetEmployee';
import './App.css'; // or your style file

function App() {
  return (
    <div className="app-container">
      <Router>
        <nav className="nav">
          <ul>
            <li><Link to="/">Add Employee</Link></li>
            <li><Link to="/get-employee">Get Employee</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<AddEmployee />} />
          <Route path="/get-employee" element={<GetEmployee />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
