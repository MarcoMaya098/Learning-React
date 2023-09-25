import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// function TaskForm({ createTask }) {
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //const value = useContext(TaskContext);
  // console.log(value)
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(title)
    // const newTask = {
    //   title,
    //   id: 4,
    //   description: 'Tarea nueva'
    // }
    // createTask(newTask)
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");

    //console.log(newTask)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        autoFocus
      />{" "}
      <br></br>
      <textarea
        placeholder="Add a comment"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
