import React, { Component } from "react";
import { register } from "../serviceWorker";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      department: "",
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

    const newUser = {
      username: this.state.username,
      department: this.state.department,
      password: this.state.password
    };

    axios
      .post("https://lbs-african-marketplace.herokuapp.com/auth/register", newUser)
      .then(response => {
        props.history.push('/login');
      })
      .catch(error => {
        console.log(error);
      });
  }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form onSubmit={this.onSubmit}>
              <h1>Register</h1>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Your Username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </div>
              <label htmlFor="password">password</label>
              <input
                type="text"
                name="password"
                placeholder="Enter Your password"
                value={this.state.password}
                onChange={this.onChange}
              />
              <select>
                <option value={this.state.department}>Buyer</option>
                <option value={this.state.department}>Seller</option>
              </select>
              <button type="submit" className="btn btn-block mt-4">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
