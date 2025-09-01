import React, { useState, useEffect } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");


  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching students:", err));
  }, []); 

  
  const addStudent = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age: Number(age) }),
    })
      .then((res) => res.json())
      .then((newStudent) => {
        setStudents([...students, newStudent]);
        setName("");
        setAge("");
      })
      .catch((err) => console.error("Error adding student:", err));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Student Directory</h1>

      {/* Form to add student */}
      <form onSubmit={addStudent} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          style={{ marginRight: "10px" }}
        />
        <button type="submit">Add Student</button>
      </form>

      {/* Display students */}
      <ul>
        {students.length > 0 ? (
          students.map((student) => (
            <li key={student.id}>
              {student.name} (Age {student.age})
            </li>
          ))
        ) : (
          <p>No students found!</p>
        )}
      </ul>
    </div>
  );
}

export default App;