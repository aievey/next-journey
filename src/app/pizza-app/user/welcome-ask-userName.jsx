"use client";
import { useState } from "react";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="flex items-center justify-center" onSubmit={handleSubmit}>
      <div>
        <p className="text-center text-stone-700">
          👋 Welcome! Please start by telling us your name:
        </p>
        <div className="my-1 flex justify-center">
          <input
            type="text"
            placeholder="Your full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-2xl bg-amber-100 p-2 px-3"
          />
          {username !== "" && (
            <div>
              <button className="rounded-2xl bg-amber-400 p-2">
                Start ordering
              </button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default CreateUser;
