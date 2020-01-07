import React from "react";

const UsersList = props => {
  return (
    <div>
      <h3>{props.users.id}</h3>
      <h3>{props.users.username}</h3>
      <h3>{props.users.department}</h3>
    </div>
  );
};

export default UsersList;


