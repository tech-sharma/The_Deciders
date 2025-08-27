# Day 04 - Simple Express API

This project demonstrates how to create a simple API using **Node.js + Express**, similar to a basic Flask app.

---

## Concepts Covered
- Setting up a Node.js + Express server
- Creating a route (`/`) with GET method
- Returning **JSON response**

---

##  Code Overview

```js
const express = require("express");
const app = express();

const PORT = 4000;

// Route: GET /
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});