import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import Dogs from "./service/dogs";

const dogs = new Dogs();
const dogUrls = dogs.getDogUrls();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App dogUrls={dogUrls} />
  </React.StrictMode>
);
