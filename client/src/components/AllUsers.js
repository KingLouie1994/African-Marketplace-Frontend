import React, { useEffect, useState } from "react";
import axiosWithAuth from "./axiosWithAuth";
import UsersList from "./UsersList";
import GoToUsersProfile from "./GoToUsersProfile";
import styled from "styled-components";

function AllUsers(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`https://lbs-african-marketplace.herokuapp.com/users`)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [users]);

  return (
    <section>
      <h1>List of all Users:</h1>
      {users.map((users, index) => {
        return (
          <Card key={index}>
            <UsersList key={index} users={users} />
            <GoToUsersProfile users={users} />
          </Card>
        );
      })}
    </section>
  );
}

export default AllUsers;

// Styling here:

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1vw;
  padding: 1vw;
  background: lightblue;
  color: orange;
`;
