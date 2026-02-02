import { revalidatePath } from "next/cache";
import { Client } from "pg";
import { z } from "zod";

export default async function TodosPage(params) {
  const client = new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
  });
  await client.connect();
  async function addTodo(formData) {
    "use server"; // This tells Next.js: "Run this code ONLY on the server"

    const task = formData.get("task"); // Get data from the input field

    const client = new Client({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
    });
    await client.connect();

    // The Async Write
    await client.query("INSERT INTO todos (task) VALUES ($1)", [task]);
    await client.end();

    // The Refresh: This tells Next.js to re-fetch the list
    revalidatePath("/database/mdn-async");
  }

  async function deleteTodo(formData) {
    "use server";
    const id = formData.get("id"); // Pull the ID from the hidden input

    const client = new Client({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
    });
    await client.connect();

    // SQL: Delete the specific row where ID matches
    await client.query("DELETE FROM todos WHERE id = $1", [id]);

    await client.end();
    revalidatePath("/todos"); // Tell Next.js the list has changed
  }

  const res = await client.query("SELECT * FROM todos");
  const todos = res.rows;
  await client.end();

  const TodoSchema = z.object({
    id: z.number(),
    task: z.string().min(3),
    is_completed: z.boolean(),
  });

  // Use it to validate your DB results
  const validatedTodos = z.array(TodoSchema).parse(todos);
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Postgres Task Manager</h1>

      {/* ADD FORM */}
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

      {/* THE LIST */}
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

            {/* DELETE FORM (One for every item) */}
            <form action={deleteTodo}>
              {/* This hidden input carries the ID to the server */}
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
