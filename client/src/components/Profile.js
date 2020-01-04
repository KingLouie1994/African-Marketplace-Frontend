import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      errors: {}
    };
  }

  render() {
    return (
      <div className="container">
        <div className="col-sm-8 mx-auto">
          <h1>Profile</h1>
        </div>
        <tbody>
          <tr>
            <td>Username</td>
            <td>{this.state.username}</td>
          </tr>
        </tbody>
      </div>
    );
  }
}

export default Profile;
