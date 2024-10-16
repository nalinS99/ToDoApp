import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { BsFillTrashFill } from 'react-icons/bs';
import { BsFillCircleFill } from 'react-icons/bs';

function Home() {
  const [todos, setToDos] = useState([]);

  // Function to fetch tasks
  const fetchTodos = () => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setToDos(result.data))
      .catch((err) => console.log(err));
  };

  // Call fetchTodos on component mount
  useEffect(() => {
    fetchTodos(); // Fetch tasks when component loads
  }, []);

  return (
    <div className="bg-white h-5/6 rounded-md font-mono">
      <h1 className="text-6xl text-center p-8z">ToDo List</h1>
      <Create fetchTodos={fetchTodos} /> {/* Pass fetchTodos as prop */}
      {todos.length === 0 ? (
        <div >
          <h2 className="text-2xl text-center p-2">No Record</h2>
        </div>
      ) : (
        todos.map((todo, index) => <div key={index}className="flex justify-center" >
          <div className="bg-black text-white w-72 m-1 p-2 flex items-center ">
          <div className="flex-none"><BsFillCircleFill /></div>
          <div className="grow h-10 flex items-center pl-3"><h2 >{todo.task}</h2></div>
          <div className="flex-none"> <BsFillTrashFill /></div>
          
          </div>
        </div>)
      )}
    </div>
  );
}

export default Home;
