import { useState } from "react";
import Create from "./Create";
function Home() {
  const [todos, setToDos] = useState([]);
  return (
    <>
      <div className="bg-white h-96 rounded-md">
        <h1 className="text-4xl text-center p-10 ">ToDO List</h1>
        <Create />
        {todos.length === 0 ? (
          <div>
            <h2 className="text-2xl text-center p-2 ">No Record</h2>
          </div>
        ) : (
          todos.map((todo) => <div>{todo}</div>)
        )}
      </div>
    </>
  );
}
export default Home;
