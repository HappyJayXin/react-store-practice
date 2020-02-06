import React, { Component } from 'react';
import { RouteComponentProps } from "react-router-dom";

export default class Login extends Component<RouteComponentProps> {
  handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    this.props.history.push('/'); 
  }

  render() {
    return (
      <div className="login-wrapper" onSubmit={this.handleSubmit}>
        <form className="box login-box">
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="text" placeholder="Email" />
            </div>
          </div>
          <div className="field">
            <label>Password</label>
            <div className="control">
              <input className="input" type="text" placeholder="Password" />
            </div>
          </div>
          <div className="control">
            <button className="button is-primary is-fullwidth">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
