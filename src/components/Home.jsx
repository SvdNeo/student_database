import React, { useState } from 'react';
import Create from './Create';
import { Link } from 'react-router-dom';

const Home = () => {
  const [students, setStudents] = useState([]);

  const handleCreateStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div>
      <h1>Students Database</h1>
      <Link to="/Create"><button>Create Student</button></Link>
      
      <Create onSubmit={handleCreateStudent} />
      {students.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>{student.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;