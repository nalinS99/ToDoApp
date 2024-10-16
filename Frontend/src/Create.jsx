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
    <div className="flex items-center justify-center ">
      <div>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border border-black rounded-sm p-1 h-9 w-52 m-1"
        />
        <button
          type="button"
          className="bg-black text-white w-20 h-9 p-1 ml-1 "
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Create;
