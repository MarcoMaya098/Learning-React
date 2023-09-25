// function TaskCard({task, deleteTask}) {

//     // function mostrarAlerta () {
//     //     alert(task.id)
//     // }

//   return (
//         <div >
//             <h1>{task.title}</h1>
//             <p>{task.description}</p>
//             <button onClick={() => deleteTask(task.id)}>Delete Task</button>
//         </div>
//   )
// }

// export default TaskCard

//import TaskContext from "../context/TaskContext"
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// function TaskCard({task, deleteTask}) {
function TaskCard({ task }) {
  // const valor = useContext(TaskContext)
  // console.log(valor)
  const { deleteTask } = useContext(TaskContext);

  return (
    // <TaskContext>
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Delete Task</button>
    </div>
    // </TaskContext>
  );
}

export default TaskCard;
