import { useState } from "react";
import axios from "axios";

function Create() {
  const [task, setTask] = useState("");
  
  const handleAdd = () => {
    
    axios
      .post("http://localhost:3001/add", { task:task })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <input
            type="text"
            name="task"
            id="task"
            
            onChange={(e) => setTask(e.target.value)}
            className="border border-black rounded-sm p-1"
          />
          <button
            type="button"
            className="bg-black text-white w-20 p-1 "
           
            onClick={handleAdd}
          >

            Add
          </button>
        </div>
      </div>
    </>
  );
}
export default Create;
