// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import { useState } from'react';

const App = () => {
  const [students, setStudents] = useState([]);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/create" element={<Create onAddStudent={handleAddStudent} />} />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;
