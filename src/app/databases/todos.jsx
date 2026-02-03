import { client } from "@/lib/db";
import { addTodo, deleteTodo } from "@/lib/action";

export default async function TodosPage(params) {
  const res = await client.query("SELECT * FROM todos");
  const todos = res.rows;

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Postgres Task Manager</h1>

      <form action={addTodo} style={{ marginBottom: "30px" }}>
        <input
          name="task"
          placeholder="New task..."
          required
          style={{ padding: "8px", color: "black" }}
        />
        <button
          type="submit"
          style={{ padding: "8px", marginLeft: "10px", cursor: "pointer" }}
        >
          Add
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "10px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
            }}
          >
            <span style={{ flexGrow: 1 }}>{todo.task}</span>

            <form action={deleteTodo}>
              <input type="hidden" name="id" value={todo.id} />
              <button
                type="submit"
                style={{
                  backgroundColor: "#ff4444",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </main>
  );
}
