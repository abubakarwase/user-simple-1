import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import UserCreate from "../pages/userCreate";
import UserList from "../pages/userList";
import UserUpdate from "../pages/userUpdate";

const FullLayout = () => {
  return (
    <div className="ui container">
      <div className="ui secondary pointing menu">
        <NavLink className="item" to="/">
          Listing
        </NavLink>
        <NavLink className="item" to="create">
          Create
        </NavLink>
      </div>
      <div className="ui segment segment-overflow">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="create" element={<UserCreate />} />
          <Route path="detail/:id" element={<UserUpdate />} />
        </Routes>
      </div>
    </div>
  );
};

export default FullLayout;
