import React from "react";
import { Link } from "react-router-dom";
const Table = ({ users }) => {
  const listRenderer = users.map((user) => (
    <tr key={user.email}>
      <td>{user.email}</td>
      <td>{user.userName}</td>
      <td type="password">{user.password}</td>
      <td>
        <Link to={`/detail/${user.email}`}>
          <i className="edit outline icon cursor-pointer"></i>
        </Link>

        <i
          // (click)="deleteUser(user.email)"
          className="trash alternate outline icon cursor-pointer"
        ></i>
      </td>
    </tr>
  ));
  return (
    <table className="ui striped table">
      <thead>
        <tr>
          <th>Email</th>
          <th>Username</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{listRenderer}</tbody>
    </table>
  );
};

export default Table;
