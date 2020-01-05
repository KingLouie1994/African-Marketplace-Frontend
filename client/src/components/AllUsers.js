import React, { useEffect, useState } from "react";
import axiosWithAuth from "./axiosWithAuth";
import UsersList from "./UsersList";

function AllUsers(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`https://lbs-african-marketplace.herokuapp.com/users/id`)
      .then(response => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [users]);

  return (
    <section>
      
      <h1>List of all Users:</h1>
      {users.map((users, index) => {
        return <UsersList key={index} users={users} />;
      })}
    </section>
  );
}

export default AllUsers;
