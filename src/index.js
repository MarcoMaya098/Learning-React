//import React, { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from 'react-dom';
import App from "./components/App";
import StepContext from "./context/StepContext";

// import { TaskContextProvider } from "./context/TaskContext";

// function App() {
//   return <h1>
//      Hola mundo
//   TaskContextProvider
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <TaskContextProvider>
//       <App />
//     </TaskContextProvider>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <StepContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StepContext>
);

// ReactDOM.render(
//   <StepContext>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </StepContext>,
//   document.getElementById('root')
// );


// import Greeting2, { Greeting, UseCard } from "./components/Gretting";
// import { Button } from "./components/Button";
// import { TaskCard } from "./components/Task";
// import { Posts } from "./components/Posts";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const handleChange = (e) => {
//   console.log(e.target.value);
// };

// const users = [
//   { id: 1, name: "Marco", image: "https://robohash.org/user1" },
//   { id: 2, name: "Joe", image: "https://robohash.org/user2" },
// ];
// function Counter() {
//   const [message, setMessage] = useState("");
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     console.log('render');
//   }, [counter]);

//   return (
//     <div>
//       <input onChange={(e) => setMessage(e.target.value)} />
//       <button
//         onClick={() => {
//           alert("El mensaje es: " + message);
//         }}
//       >
//         Save
//       </button>

//       <hr />

//       <h1>Counter: {counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>Increment</button>
//     </div>

//   );
// }

// root.render(
//   <>

//     {/* <Counter /> */}

//     {/* {users.map((user, index) =>{
//       return <div key={index}>
//         <h1>{user.name}</h1>
//         <img src={user.image} alt="imagenuser" />
//       </div>;
//     })} */}

//     <App />

//     {/* <TaskCard ready={true} /> */}

//     {/* <Button text="Saludar" name="MARCO" /> */}
//     {/* <input onClick={function() {
//     alert('Input seleccionado')
//   }} /> */}

//     {/* <input
//       id="idinput"
//       onChange={(e) => {
//         console.log(e.target.value);
//       }}
//     /> */}

//     {/* <input id="idinput" onChange={handleChange} />

//     <form onSubmit={(e) => {
//       e.preventDefault();
//       alert('Please enter');
//     }}>
//       <h1>Registro de usuarios</h1>
//       <button>Send</button>
//     </form> */}

//     {/* <Posts /> */}

//     {/* <Greeting title="hola JSX" name="mart" />
//     <Greeting title="hola JS" />
//     <Greeting title="hola Marco" />

//     <Greeting2 title="hola Marco2" />
//     <Greeting2 title="hola mundo" name="joue" />
//     <Greeting2 title="hola react" name="luia" />

//     <UseCard
//       name="Marco"
//       amount={3000}
//       married={true}
//       points={[99, 33.3, 22.2]}
//       address={{ street: "123 Main street", city: "New York" }}
//       grett={function () {
//         alert("Hello");
//       }}
//     />

//     <UseCard
//       name="Antonio"
//       amount={4500}
//       married={false}
//       points={[100.2, 45.1]}
//       address={{ street: "22 Second street", city: "New York" }}
//       grett={function () {
//         alert("Hello");
//       }}
//     /> */}
//   </>
// );
