//day-7 task (State Management)
import React, { useState } from "react";

export default function Day7() {
 
  const [count, setCount] = useState(0);


  const [text, setText] = useState("");

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>Day 7: State Management</h2>

      {/* Counter Section */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Counter</h3>
        <p>Current Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
          Decrement
        </button>
      </div>

      {/* Live Text Preview Section */}
      <div>
        <h3>Live Text Preview</h3>
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <p>Preview: {text}</p>
      </div>
    </div>
  );
}