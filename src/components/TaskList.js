import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// function TaskList({tasks, deleteTask}) {
function TaskList() {
  //const { tasks, deleteTask } = useContext(TaskContext)
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        // <div key={task.id}>
        // <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
        <TaskCard key={task.id} task={task} />
        // </div>
      ))}
    </div>
  );
}

export default TaskList;
