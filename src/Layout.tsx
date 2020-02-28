import React, { FC } from 'react'
import Header from 'components/App/Header';

const Layout:FC = ({ children }) => (
  <div className="main">
    <Header nickname="Admin" />
    { children }
  </div>
)

export default Layout;
