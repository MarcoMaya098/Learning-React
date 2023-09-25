// import TaskForm from "./TaskForm";
// import TaskList from "./TaskList";

// import data from "../api/Task";
// import { useState, useEffect } from "react";

// const [tasks, setTasks] = useState([]);

// useEffect(() => {
//   setTasks(data);
// }, []);

// // function createTask(taskTitle) {
// //     setTasks([...tasks, {
// //         title: taskTitle,
// //         id:tasks.length,
// //         description: 'Nueva tarea'
// //     }]);
// // }

// function createTask(task) {
//   setTasks([
//     ...tasks,
//     {
//       title: task.title,
//       id: tasks.length,
//       description: task.description,
//     },
//   ]);
// }

// function deleteTask(taskId) {
//     setTasks(tasks.filter((task) => task.id!== taskId));
//     //console.log(taskId);
//   }

// function App() {
//   return (
//     <>
//       {/* <TaskForm createTask={createTask} />
//       <TaskList tasks={tasks} deleteTask={deleteTask} /> */}
//       <TaskForm />
//       <TaskList />

//     </>
//   );
// }

// export default App;

// import React from 'react';
// import Filter from './Filter';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// function App() {
//   return (
//     <div>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <Filter />
//       </LocalizationProvider>
//     </div>
//   );
// }

// export default App;

import React, { useContext } from "react";
import FirstStep from "./MuiSteps/FirstStep";
import SecondStep from "./MuiSteps/SecondStep";
import ThirdStep from "./MuiSteps/ThirdStep";
import { Stepper, Step, StepLabel } from "@mui/material";
import { multiStepContext } from "../context/StepContext";

function App() {
  const [currentStep, finalData] = useContext(multiStepContext);

  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;

      default:
        break;
    }
  }

  return (
    <>
      <div className="form" style={{}}>
        <div className="stepper" style={{ justifyContent: "center", alignItems: "center" }}>
          <Stepper
            style={{ width: "18%" }}
            activeStep={currentStep - 1}
            orientation="horizontal"
          >
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>

        {showStep(currentStep)}
      </div>
    </>
  );
}

export default App;
