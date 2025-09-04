import { useEffect, useState } from "react";
import { getTodos, addTodo, deleteTodo, toggleTodo } from "./api";
import "./app.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getTodos();
        setTodos(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      setAdding(true);
      const created = await addTodo(text.trim());
      setTodos(prev => [created, ...prev]);
      setText("");
    } catch (e) {
      setError(e.message);
    } finally {
      setAdding(false);
    }
  };

  const handleDelete = async (id) => {
    // optimistic UI
    const prev = todos;
    setTodos(todos.filter(t => t.id !== id));
    try {
      await deleteTodo(id);
    } catch {
      setTodos(prev);
      setError("Delete failed");
    }
  };

  const handleToggle = async (id) => {
    // optimistic toggle
    setTodos(ts => ts.map(t => t.id === id ? { ...t, done: !t.done } : t));
    try {
      await toggleTodo(id);
    } catch {
      // revert if failed
      setTodos(ts => ts.map(t => t.id === id ? { ...t, done: !t.done } : t));
      setError("Toggle failed");
    }
  };

  return (
    <div className="wrap">
      <h1>To-Do (React + Node)</h1>

      <form onSubmit={handleAdd} className="row">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task..."
        />
        <button disabled={adding}>{adding ? "Adding..." : "Add"}</button>
      </form>

      {error && <p className="error">{error}</p>}
      {loading ? (
        <p>Loading…</p>
      ) : (
        <ul className="list">
          {todos.length === 0 && <li className="empty">No tasks yet</li>}
          {todos.map(t => (
            <li key={t.id} className={item ${t.done ? "done" : ""}}>
              <button className="chk" onClick={() => handleToggle(t.id)}>
                {t.done ? "✓" : "○"}
              </button>
              <span className="text">{t.text}</span>
              <button className="del" onClick={() => handleDelete(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}