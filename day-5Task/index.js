// day5-express.js

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const students = [
    { id: 1, name: 'John', marks: 85 },
    { id: 2, name: 'Alice', marks: 92 },
    { id: 3, name: 'Bob', marks: 78 }
];

app.get('/', (req, res) => {
    res.send('Welcome to Express.js API!');
});

app.get('/students', (req, res) => {
    res.json(students);
});

app.post('/students', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.json({ message: 'Student added successfully', students });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});