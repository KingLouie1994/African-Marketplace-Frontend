import React, { useState, useEffect } from "react";
import axiosWithAuth from "./components/axiosWithAuth";
import { Route } from "react-router-dom";
import "./App.css";
import AllUsers from "./components/AllUsers";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import OtherUsersProfile from "./components/OtherUsersProfile";
import PersonalItemList from "./components/PersonalItemList";

function App() {
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
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/userslist" component={AllUsers} />
        <PrivateRoute exact path="/itemlist" component={PersonalItemList} />
        {users.map((user, index) => {
          return (
            <PrivateRoute
              key={index}
              userId={user.id}
              exact
              path={`/user/${user.id}`}
              component={OtherUsersProfile}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
