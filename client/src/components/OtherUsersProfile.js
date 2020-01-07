import React, { useState, useEffect } from "react";
import axiosWithAuth from "./axiosWithAuth";

export default function OtherUsersProfile(props) {
  const [users, setUsers] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get(
        `https://lbs-african-marketplace.herokuapp.com/users/${props.userId}`
      )
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [users]);

  return (
    <div>
      <h1>Hello, my name is {users.username}</h1>
      <h3>I'm a {users.department} on this marketplace</h3>
    </div>
  );
}
