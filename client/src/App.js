import React from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={Register} />
      </header>
    </div>
  );
}

export default App;
