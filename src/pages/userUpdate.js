import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Form from "../components/form";
import userAPI from "../api/userAPI";

const UserUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const updateData = (user) => {
    // call update api here
    userAPI.updateUser(user);
    toast.success("User updated succefully");
    navigate("/");
  };

  useEffect(() => {
    const doFetch = async () => {
      const response = userAPI.getUser(id);
      setUserData(response);
    };
    doFetch();
  }, [id]);

  return (
    <div className="ui container">
      {userData.email && (
        <Form updateData={updateData} edit userData={userData} />
      )}
      {!userData.email && "Data is loading"}
    </div>
  );
};

export default UserUpdate;
