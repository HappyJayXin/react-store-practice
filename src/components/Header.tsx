import React, { Component } from 'react';
import { type } from 'os';

type HeaderState = {
  nickname: string;
};

export default class Header extends Component<HeaderState> {
  // constructor(props: HeaderState) {
  //   super(props);
  // }

  renderLink() {
    const { nickname } = this.props;
    if (nickname) {
      return (
        <span className="nickname">
          <i className="fas fa-user"></i>
          {this.props.nickname}
        </span>
      );
    } else {
      return (
        <>
          <a href="/">Login</a>
          <a href="/">Register</a>
        </>
      );
    }
  }

  render() {
    return (
      <header className="header">
        <section className="grid">
          <div className="start">
            <a href="/">Home</a>
          </div>
          <div className="end">{this.renderLink()}</div>
        </section>
      </header>
    );
  }
}
