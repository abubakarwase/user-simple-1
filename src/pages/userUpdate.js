import React from "react";
import Form from "../components/form";

const UserUpdate = () => {
  const updateData = (user) => {
    // call update api here
    console.log(user, "in user update");
  };
  return (
    <div className="ui container">
      <Form updateData={updateData} edit />
    </div>
  );
};

export default UserUpdate;
