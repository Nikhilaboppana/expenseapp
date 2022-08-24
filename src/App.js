// // // import logo from "./logo.svg";
// import React from "react";
// import "./App.css";
// // import expenses from "./components/expenses/expenses";
// import Expenses from "./components/expenses/Expenses";
// function App() {
//   // const pE1 = <p>Hello From Paragraph</p>;
//   // const secondParaE1 = React.createElement("p", {}, "Second Paragraph");
//   // return (React.createElement("div",{className: "container"},
//   // React.createElement("h1",{},"Hello React"),
//   // React.createElement("h2",{},"Bye Bye..."))
//   return (
//     // <div className="container">
//     //   {/* <h1>Hello React!!!</h1>
//     //   <h2>Another Element</h2>
//     //   {4 + 5}
//     //   {pE1}
//     //   {secondParaE1} */}
//     // </div>
//     <div className="container">
//       <Expenses />
//     </div>
//   );
// }
// export default App;
// // import "./App.css";

// // function App() {
// //   return (
// //     <h1>Hello, Welcome to React</h1>
// //     //   <div className="App">
// //     //     <header className="App-header">
// //     //       <img src={logo} className="App-logo" alt="logo" />
// //     //       <p>
// //     //         Edit <code>src/App.js</code> and save to reload.
// //     //       </p>
// //     //       <a
// //     //         className="App-link"
// //     //         href="https://reactjs.org"
// //     //         target="_blank"
// //     //         rel="noopener noreferrer"
// //     //       >
// //     //         Learn React
// //     //       </a>
// //     //     </header>
// //     //   </div>
// //   );
// // }

// // export default App;
// import React from "react";
// import Login from "./components/Auth/Login/Login";
// // import Expenses from "./components/Expenses/Expenses";

// function App() {
//   return (
//     <div className="container">
//       <Login />
//       {/* <Expenses /> */}
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Login from "./components/Auth/Login/Login";
// import UseEffectDemo from "./components/Demo/UseEffectDemo";
// import Expenses from "./components/Expenses/Expenses";

// function App() {
//   return (
//     // <UseEffectDemo />
//     // <div className="container">
//     //   <Login />
//     <Expenses />
//     //   {/* <Login /> */}
//     //   {/* <p className="display-4 text-center">Awesome Expense App</p>
//     //   <Expenses /> */}
//     // </div>
//   );
// }
// export default App;
// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Expenses from "./components/expenses/Expenses";
// import Courses from "./pages/Courses/Courses";

// function App() {
//   // const context = useContext(AuthContext);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const onLogin = () => {
//     console.log("ON LOGIN");
//     setIsLoggedIn(true);
//   };

//   // const onLogout = () => setIsLoggedIn(false);

//   return (
//     <div className="container">
//       <p>App Works</p>
//       <Routes>
//         <Route path="/expenses" element={<Expenses />}></Route>
//         {/* http://localhost:3000/expenses */}
//         <Route path="/courses/*" element={<Courses />}></Route>
//       </Routes>
//     </div>
//     // <DemoParent />
//     // <UseReducerDemo />

//     // <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogin: onLogin, onLogout: onLogout }}>
//     //   <UseContextDemo />
//     // </AuthContext.Provider>
//   );
// }

// export default App;

import React from "react";

import { Route, Routes } from "react-router-dom";
import Expenses from "./components/expenses/Expenses";
// import Expenses from "./components/expenses/Expenses";
import Header from "./components/Header/Header";
import User from "./pages/Lego/User/User";
import Courses from "./pages/Courses/Courses";
import AddUser from "./pages/Lego/AddUser/AddUser";
import ListUsers from "./pages/Lego/ListUsers/ListUsers";

function App() {
  // const context = useContext(AuthContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const onLogin = () => {
  //   console.log("ON LOGIN");
  //   setIsLoggedIn(true);
  // };

  // const onLogout = () => setIsLoggedIn(false);

  return (
    <div className="container">
      <p>App Works</p>
      <Header />
      <br />
      <Routes>
        {/* <Route path="/courses/*" element={<Courses />} /> */}
        <Route path="/list-users" element={<ListUsers />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
      {/* <Expenses /> */}
      {/* <p>App Works</p>
      <Routes>
        <Route path="/expenses" element={<Expenses />} />         
        <Route path="/courses/*" element={<Courses />} />
      </Routes> */}
    </div>
    // <DemoParent />
    // <UseReducerDemo />

    // <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogin: onLogin, onLogout: onLogout }}>
    //   <UseContextDemo />
    // </AuthContext.Provider>
  );
}

export default App;

// /data> json-server db.json --watch --port=3030
