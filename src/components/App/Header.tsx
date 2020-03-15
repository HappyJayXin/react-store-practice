import React, { useRef } from 'react';
import Panel from 'components/Common/Panel';
import { Link } from 'react-router-dom';
import { HeaderProps } from "types";

const Header = ({user}: HeaderProps) => {
  const panelRef = useRef<Panel>(null);

  const toProfile = () => {
    panelRef.current?.open({
      comp: 'profile',
      props: {
        user
      },
      callback: () => {
      }
    });
  }
  return (
    <header className="header">
      <Panel ref={panelRef} />
      <section className="grid">
        <div className="start">
          <Link to="/">Home</Link>
        </div>
        <div className="end">
          {user ? (
            <span className="nickname" onClick={toProfile}>
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
  )
};

export default Header;
