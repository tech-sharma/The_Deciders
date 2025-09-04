const BASE = "http://localhost:4000/api";

export async function getTodos() {
  const r = await fetch(${BASE}/todos);
  if (!r.ok) throw new Error("Failed to fetch todos");
  return r.json();
}

export async function addTodo(text) {
  const r = await fetch(${BASE}/todos, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });
  if (!r.ok) throw new Error("Failed to add todo");
  return r.json();
}

export async function deleteTodo(id) {
  const r = await fetch(${BASE}/todos/${id}, { method: "DELETE" });
  if (!r.ok) throw new Error("Failed to delete todo");
}

export async function toggleTodo(id) {
  const r = await fetch(${BASE}/todos/${id}/toggle, { method: "PATCH" });
  if (!r.ok) throw new Error("Failed to toggle todo");
  return r.json();
}