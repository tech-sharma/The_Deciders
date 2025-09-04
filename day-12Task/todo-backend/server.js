import express from "express";
import cors from "cors";
import { nanoid } from "nanoid";

const app = express();
app.use(cors());
app.use(express.json());

// In-memory DB (resets on restart)
let todos = [
  { id: nanoid(), text: "Learn React + API", done: false },
  { id: nanoid(), text: "Build mini To-Do", done: false }
];

// GET all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// POST create todo
app.post("/api/todos", (req, res) => {
  const { text } = req.body || {};
  if (!text || !text.trim()) {
    return res.status(400).json({ error: "text is required" });
  }
  const todo = { id: nanoid(), text: text.trim(), done: false };
  todos.unshift(todo);
  res.status(201).json(todo);
});

// DELETE a todo
app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const before = todos.length;
  todos = todos.filter(t => t.id !== id);
  if (todos.length === before) return res.status(404).json({ error: "not found" });
  res.status(204).end();
});

// (Optional) PATCH toggle done
app.patch("/api/todos/:id/toggle", (req, res) => {
  const t = todos.find(x => x.id === req.params.id);
  if (!t) return res.status(404).json({ error: "not found" });
  t.done = !t.done;
  res.json(t);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(API running on http://localhost:${PORT}));