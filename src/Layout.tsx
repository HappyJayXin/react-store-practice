import React, { FC, useMemo } from 'react'
import Header from 'components/App/Header';

const Layout:FC = ({ children }) => {
  const user = useMemo(() => {
    return global.auth.getUser();
  }, []);

  return (
    <div className="main">
      <Header user={user} />
      { children }
    </div>
  )
}

export default Layout;
