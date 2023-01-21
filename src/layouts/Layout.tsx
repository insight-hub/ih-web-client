import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <div className="layout__container">
      <nav>
        <Link to="/profile">PROFILE</Link>
        <Outlet />
      </nav>
    </div>
  );
};
