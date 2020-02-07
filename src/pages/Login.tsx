import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Login extends Component<RouteComponentProps, LoginState> {
  constructor(props: RouteComponentProps) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(this.state);
    this.props.history.push('/');
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value
    } as Pick<LoginState, keyof LoginState>)
  }

  render() {
    return (
      <div className="login-wrapper" onSubmit={this.handleSubmit}>
        <form className="box login-box">
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
            </div>
          </div>
          <div className="field">
            <label>Password</label>
            <div className="control">
              <input className="input" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
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

interface LoginState {
  email: string;
  password: string
}
