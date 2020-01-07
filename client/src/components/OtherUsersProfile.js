import React, { useState, useEffect } from "react";
import axiosWithAuth from "./axiosWithAuth";

export default function OtherUsersProfile(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`https://lbs-african-marketplace.herokuapp.com/users/`)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [users]);

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}
