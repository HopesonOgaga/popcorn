import React from "react";
import ReactDOM from "react-dom/client";
import propTypes from 'prop-types'
import StarRating from "./components/star";
// import App from "./App";
// import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      size={30}
      color="#fcc419"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    ></StarRating>
    <StarRating
      maxRating={10}
      size={20}
      color="red"
      defaultRating={3}
    ></StarRating>
  </React.StrictMode>
);
