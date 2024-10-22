import { useState } from "react";
import axios from "axios";

function Create({ fetchTodos }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() === "") {
      console.log("Task is empty");
      return;
    }

    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => {
        console.log("Added task:", result);
        setTask("");
        fetchTodos();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center justify-center mb-6">
      <div className="flex items-center">
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border border-gray-300 rounded-md p-2 h-10 w-64 m-1 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
          placeholder="Add a new task"
        />
        <button
          type="button"
          className="bg-gray-800 text-white w-24 h-10 p-1 ml-1 rounded-md transition hover:bg-gray-700"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Create;
