import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>✅ Day 8: To-Do List</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Enter a task"
        style={{
          padding: "10px",
          border: focused ? "2px solid blue" : "1px solid gray",
          borderRadius: "4px",
          marginRight: "10px",
        }}
      />

      <button
        onClick={addTask}
        style={{
          padding: "10px 15px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add
      </button>

      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#f4f4f4",
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {task}
            <button
              onClick={() => removeTask(index)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "3px",
                padding: "5px 8px",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;