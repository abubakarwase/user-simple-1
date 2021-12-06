import React from "react";
import ReactDOM from "react-dom";
import FullLayout from "./layouts/fullLayout";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <BrowserRouter>
    <FullLayout />
  </BrowserRouter>,
  document.querySelector("#root")
);
