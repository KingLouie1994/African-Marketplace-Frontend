import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
      </header>
    </div>
  );
}

export default App;
