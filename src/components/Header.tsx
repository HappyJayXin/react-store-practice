import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <section className="grid">
          <div className="start">
            <a href="/">Home</a>
          </div>
          <div className="end">
            <a href="/">Login</a>
            <a href="/">Register</a>
          </div>
        </section>
      </header>
    );
  }
}
