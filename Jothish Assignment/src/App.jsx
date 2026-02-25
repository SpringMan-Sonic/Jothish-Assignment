import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login.jsx';
import EmployeeList from './components/EmployeeList.jsx';
import EmployeeDetails from './components/EmployeeDetails.jsx';
import PhotoCapture from './components/PhotoCapture.jsx';
import PhotoResult from './components/PhotoResult.jsx';
import SalaryChart from './components/SalaryChart.jsx';
import LocationMap from './components/LocationMap.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [employees, setEmployees] = React.useState([]);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Login setIsAuthenticated={setIsAuthenticated} setEmployees={setEmployees} />} 
        />
        <Route 
          path="/employees" 
          element={isAuthenticated ? <EmployeeList employees={employees} /> : <Navigate to="/" />} 
        />
        <Route 
          path="/employees/:id" 
          element={isAuthenticated ? <EmployeeDetails employees={employees} /> : <Navigate to="/" />} 
        />
        <Route 
          path="/photo-capture/:id" 
          element={isAuthenticated ? <PhotoCapture /> : <Navigate to="/" />} 
        />
        <Route 
          path="/photo-result" 
          element={isAuthenticated ? <PhotoResult /> : <Navigate to="/" />} 
        />
        <Route 
          path="/salary-chart" 
          element={isAuthenticated ? <SalaryChart employees={employees} /> : <Navigate to="/" />} 
        />
        <Route 
          path="/location-map" 
          element={isAuthenticated ? <LocationMap employees={employees} /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;