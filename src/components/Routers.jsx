import React from "react";
import { Route, Routes } from "react-router-dom";
import { Edit } from "./edit/Edit";
import { Login } from "./login/Login";
import { NewTask } from "./newTask/NewTask";
import { Register } from "./register/Register";
import { Summary } from "./summary/Summary";

export const Routers = () => {
  return (
    <div>
      <Routes>
      {/* <Route path="/" element={<Login/>}></Route> */}
        <Route path="/" element={<Summary/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/edit" element={<Edit/>}></Route>
        <Route path="/newtask" element={<NewTask/>}></Route>
      </Routes>
    </div>
  );
};
