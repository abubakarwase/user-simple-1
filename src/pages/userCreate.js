import React from "react";
import userAPI from "../api/userAPI";
import Form from "../components/form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserCreate = () => {
  const navigate = useNavigate();
  const submitData = (user) => {
    // call post api here
    userAPI.createUser(user);
    toast.success("User created succefully");
    navigate("/");
  };
  return (
    <div className="ui container">
      <Form submitData={submitData} create />
    </div>
  );
};

export default UserCreate;
