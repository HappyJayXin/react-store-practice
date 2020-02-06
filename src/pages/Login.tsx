import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface RouteParams {
  nickname: string;
}

interface LoginProps extends RouteComponentProps<RouteParams> {}

export default class Login extends Component<LoginProps> {
  constructor(props: LoginProps) {
    super(props);
  }

  render() {
    console.log(this.props.match.params.nickname);
    return (
      <div className="login-wrapper">
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
