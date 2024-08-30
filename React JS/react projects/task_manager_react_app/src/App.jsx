import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <div className="App">
        <h1>Task Manager</h1>
        <AddTask onAdd={addTask} />
        <TaskList tasks={tasks} />
      </div>
    </>
  );
};
export default App;
