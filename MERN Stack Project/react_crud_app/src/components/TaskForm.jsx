/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const TaskForm = ({ addTask, task }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, id: task ? task.id : null });
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          required
        ></textarea>
        <button type="submit">{task ? "Update Tasks" : "Add Task"}</button>
      </form>
    </>
  );
};

export default TaskForm;
