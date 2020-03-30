// // This is the base for app.js for user authentication

// import React, { useEffect, createContext, useReducer, useContext } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavBar from "./components/navBar";
// import "./App.css";
// import Login from "./pages/Login";
// import SignUp from "./pages/Signup";
// import Post from "./pages/Post";
// import Display from "./pages/Display";
// import axios from "axios";

// export const AuthContext = createContext();

// const userState = {
//   isAuthentiated: false,
//   user: null,
//   token: null
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       localStorage.setItem("user", JSON.stringify(action.payload.user));
//       localStorage.setItem("token", JSON.stringify(action.payload.token));
//       return {
//         ...state,
//         isAuthentiated: true,
//         user: action.payload.user,
//         token: action.payload.token
//       };
//     case "LOGOUT":
//       localStorage.clear();
//       return {
//         ...state,
//         isAuthentiated: false,
//         user: null
//       };
//     default:
//       return state;
//   }
// };

// function App() {
//   useEffect(() => {
//     axios.get("/api/hello").then(result => {
//       console.log(result.data);
//     });
//   }, []);

//   const [state, dispatch] = useReducer(reducer, userState);

//   return (
//     <AuthContext.Provider
//       value={{
//         state,
//         dispatch
//       }}
//     >
//       <Router>
//         <NavBar />
//         <Route exact path="/">
//           <Login />
//         </Route>
//         <Route exact path="/signup">
//           <SignUp />
//         </Route>
//         <Route exact path="/post">
//           <div>{!state.isAuthenticated ? <Login /> : <Post />}</div>
//         </Route>
//         <Route exact path="/display">
//           <Display />
//         </Route>
//       </Router>
//     </AuthContext.Provider>
//   );
// }
// export default App;
