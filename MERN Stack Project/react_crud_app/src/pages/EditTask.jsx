import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskToEdit = savedTasks.find((t) => t.id === Number(id));
    setTask(taskToEdit);
  }, [id]);

  const handleUpdate = (updatedTask) => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = savedTasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    navigate("/");
  };

  return task ? (
    <div>
      <h2>Edit Task</h2>
      <TaskForm task={task} addTask={handleUpdate} />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default EditTask;
