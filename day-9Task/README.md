const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 }
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  const newStudent = { id: Date.now(), ...req.body };
  students.push(newStudent);
  res.json(newStudent);
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));