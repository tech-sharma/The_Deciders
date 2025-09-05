const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/notesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Note schema
const noteSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Note = mongoose.model("Note", noteSchema);

// Routes

// Create note
app.post("/notes", async (req, res) => {
  const note = new Note(req.body);
  await note.save();
  res.json(note);
});

// Get all notes
app.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Update note
app.put("/notes/:id", async (req, res) => {
  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedNote);
});

// Delete note
app.delete("/notes/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(Server running on port ${PORT}));