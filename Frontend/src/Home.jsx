import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import {
  BsFillTrashFill,
  BsFillCheckCircleFill,
  BsFillCircleFill,
} from "react-icons/bs";

function Home() {
  const [todos, setToDos] = useState([]);

  const fetchTodos = () => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setToDos(result.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleEdit = (id) => {
    axios
      .put(`http://localhost:3001/update/${id}`)
      .then(() => {
        setToDos((prevTodos) =>
          prevTodos.map((todo) =>
            todo._id === id ? { ...todo, done: !todo.done } : todo
          )
        );
      })
      .catch((err) => console.log(err));
  };

  const deleted = (id) => {
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then(() => fetchTodos())
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-white h-5/6 rounded-lg shadow-lg p-6 overflow-y-auto">
      <h1 className="text-5xl font-bold text-center mb-8 text-gray-800">
        ToDo List
      </h1>
      <Create fetchTodos={fetchTodos} /> {}
      {todos.length === 0 ? (
        <div>
          <h2 className="text-xl text-center p-2 text-gray-500">No Record</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div key={todo._id} className="flex justify-center mb-4">
            <div className="bg-gray-800 text-white w-80 p-4 rounded-lg flex items-center shadow-md transition hover:shadow-lg">
              <div
                className="flex-none cursor-pointer"
                onClick={() => handleEdit(todo._id)}
              >
                {todo.done ? (
                  <BsFillCheckCircleFill className="text-green-500 text-2xl" />
                ) : (
                  <BsFillCircleFill className="text-gray-400 text-2xl" />
                )}
              </div>
              <div
                className={`grow h-10 flex items-center pl-3 ${
                  todo.done ? "line-through text-gray-400" : "text-white"
                }`}
              >
                <h2 className="text-lg">{todo.task}</h2>
              </div>
              <div
                className="flex-none cursor-pointer"
                onClick={() => deleted(todo._id)}
              >
                <BsFillTrashFill className="text-red-500 text-2xl hover:text-red-700 transition" />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
