import React, { useState } from 'react';
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
        id: Math.floor(Math.random() * 1000), 
      };
      setStudents([...students, newStudent]);

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
            {students.map(student => (
              <li key={student.id}>
                {student.name} - {student.email} - {student.age} - {student.gender}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Create;
  