import React, {FunctionComponent} from 'react';

type HeaderState = {
  nickname: string;
};

const Header: FunctionComponent<HeaderState> = ({nickname}) => (
  <header className="header">
    <section className="grid">
      <div className="start">
        <a href="/">Home</a>
      </div>
      <div className="end">
        {nickname ? (
          <span className="nickname">
            <i className="fas fa-user"></i>
            {nickname}
          </span>
        ) : (
          <>
            <a href="/">Login</a>
            <a href="/">Register</a>
          </>
        )}
      </div>
    </section>
  </header>
);

export default Header;
