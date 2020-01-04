import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.a`
  color: white;
  border: 2px solid white;
  text-decoration: none;
  padding: 6px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  align-self: right;
  height: 1.8rem;
  margin-right: 1rem;
  font-size: 1.4rem;
  :hover {
    color: gray;
    border: 2px solid gray;
  }
`;

const H1 = styled.h1`
  color: white;
  font-size: 2.8rem;
  margin-left: 2rem;
  :hover {
    color: gray;
  }
`;

export default class NavBar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div>
        <header>
          <Link to="/">
            <H1>European-African MarketPlace</H1>
          </Link>
          <div className="buttons-nav">
            <Link to="/Profile">
              <Button>Profile</Button>
            </Link>
            <Link to="/">
              <Button>Register</Button>
            </Link>
            <Link to="/Login">
              <Button>Login</Button>
            </Link>
          </div>
        </header>
      </div>
    );
  }
}
