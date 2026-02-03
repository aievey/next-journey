import { client } from "./db";
import { revalidatePath } from "next/cache";

async function addTodo(formData) {
  "use server";
  const task = formData.get("task");
  if (!task) return;
  try {
    await client.query("INSERT INTO todos (task) VALUES ($1)", [task]);
    revalidatePath("/database/mdn-async");
  } catch (error) {
    console.error("Database Error:", error);
  }
}

async function deleteTodo(formData) {
  "use server";
  const id = formData.get("id");
  try {
    await client.query("DELETE FROM todos WHERE id = $1", [id]);
    revalidatePath("/database/mdn-async");
  } catch (error) {
    console.error("Database Error: ", error);
  }
}

export { addTodo, deleteTodo };
