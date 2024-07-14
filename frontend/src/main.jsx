import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

import SignUp from "./components/Authorization/Signup.jsx";
import SignInSide from "./components/Authorization/SignIn.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
);
