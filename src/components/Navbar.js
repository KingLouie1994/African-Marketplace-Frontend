import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  function handleSubmit() {
    localStorage.clear();
  }

  return (
    <Navigation className="navbar navbar-expand-sm navbar-dark mb-4">
      <Link to="/">Sign Up</Link>
      <Link to="/login">Login</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/userslist">Sellerslist</Link>
      <Link to="/itemlist">Itemlist</Link>
      <Link to="/login" onClick={() => handleSubmit()}>
        Logout
      </Link>
    </Navigation>
  );
}

// Styling here:

const Navigation = styled.nav`
    max-width: 120rem;
    display: flex;
    text-decoration: none;
    margin: auto;
    margin-top: 3vw;
    padding: 0 2rem;;
    justify-content: space-between;
    height: 5rem;

  }

    & a {
        color: #69C8ECFF;
        text-transform: uppercase;
        font-weight: 600;
        margin: 0 1.5rem;
        transition: all 300ms linear 0s;
        text-decoration: none;
        cursor: pointer;
        
        &:hover {
            color: #E762D7FF;
            text-decoration: underline;
    }`;
