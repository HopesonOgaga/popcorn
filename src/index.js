import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./components/star";
// import App from "./App";
// import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} size={30} color="#fcc419"></StarRating>
    <StarRating maxRating={10} size={20} color="red"></StarRating>
  </React.StrictMode>
);
