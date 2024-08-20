import "./App.css";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import { Link, Route, Routes } from "react-router-dom";

import { useState } from "react";
import EditForm from "./Components/EditForm";

function App() {
  const [tasks, setTasks] = useState([]);

  //add task
  function add(newname, newdescription) {
    setTasks([...tasks, { name: newname, Description: newdescription }]);

    localStorage.setItem("data", JSON.stringify(tasks));
  }

  return (
    <>
      <nav>
        <Link to={"/addtask"}>
          <button className="css-button">Add Task</button>
        </Link>
        <Link to={"/"}>
          <button className="css-button">Home</button>
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/addtask" element={<TaskForm add={add} />} />
        <Route path="/edit/:id" element={<EditForm />} />
      </Routes>
    </>
  );
}

export default App;
