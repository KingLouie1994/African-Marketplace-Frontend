import React from "react";
import { Link } from "react-router-dom";

export default function GoToUsersProfile(props) {
  return (
    <Link to={`/user/${props.users.id}`}>
      <button>Watch my Profile!</button>
    </Link>
  );
}
