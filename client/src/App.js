import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import AllUsers from "./components/AllUsers";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/userslist" component={AllUsers} />
      </header>
    </div>
  );
}

export default App;
