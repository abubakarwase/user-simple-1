import React, { useEffect, useMemo, useState } from "react";
import Table from "../components/table";
import userAPI from "../api/userAPI";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const doFetch = async () => {
      const response = userAPI.getUsers();
      setUsers(response);
    };
    doFetch();
  }, []);
  return (
    <div className="ui container">
      <Table users={users} />
    </div>
  );
};

export default UserList;
