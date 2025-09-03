const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let students = [
    { id: 1, name: "Rahul", age: 20 },
    { id: 2, name: "Priya", age: 22 }
];


app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to Student CRUD API" });
});

app.get('/students', (req, res) => {
    res.status(200).json(students);
});

app.get('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);
    if (!student) {
        return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json(student);
});

app.post('/students', (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) {
        return res.status(400).json({ error: "Invalid data" });
    }
    const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    const newStudent = { id: newId, name, age };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

app.put('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);
    if (!student) {
        return res.status(404).json({ error: "Student not found" });
    }
    const { name, age } = req.body;
    student.name = name || student.name;
    student.age = age || student.age;
    res.status(200).json(student);
});

app.delete('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    students = students.filter(s => s.id !== studentId);
    res.status(200).json({ message: "Student deleted successfully" });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});