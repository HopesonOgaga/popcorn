import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./components/star";
// import App from "./App";
// import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} size={30}></StarRating>
  </React.StrictMode>
);
