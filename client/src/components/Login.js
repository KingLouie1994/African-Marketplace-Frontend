import React, { Component } from "react";
import axios from axios;
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    };

    axios
    .post("https://lbs-african-marketplace.herokuapp.com/auth/login", user)
    .then(response => {
      localStorage.setItem("token", response.data.token);
      props.history.push('/profile');
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form onSubmit={this.onSubmit}>
              <h1>Login</h1>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Your Username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <label htmlFor="password">password</label>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter Your password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn btn-block mt-4">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
