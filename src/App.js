import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Home from './components/Home';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: ''
  });

  // Function to update formData
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home formData={formData} />} />
        <Route path="/create" element={<Create formData={formData} handleChange={handleChange}/>} />
      
        
      </Routes>
    </Router>
  );
};

export default App;
