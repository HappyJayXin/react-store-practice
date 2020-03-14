import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderProps } from "types";

const Header = ({user}: HeaderProps) => (
  <header className="header">
    <section className="grid">
      <div className="start">
        <Link to="/">Home</Link>
      </div>
      <div className="end">
        {user ? (
          <span className="nickname">
            <i className="fas fa-user"></i>
            {user.nickname}
          </span>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </section>
  </header>
);

export default Header;
