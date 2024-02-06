import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Create = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: students.length + 1, // Incremental ID (you can use a more reliable method)
      ...formData
    };
    setStudents([...students, newStudent]);
    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      age: '',
      gender: ''
    });
  };

  return (
    <div>
      <h2>Create Student</h2>
      <Link to= "/">Home</Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Display the list of students */}
      <div>
        <h3>Students:</h3>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              ID: {student.name},Name: {student.name}, Email: {student.email}, Age: {student.age}, Gender: {student.gender}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Create;
