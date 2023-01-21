import React from 'react';
import { Link } from 'react-router-dom';

import { Search } from '../components/search/Search';
import UserAvatar from '../components/avatar/UserAvatarContainer';
import './Header.scss';

// TODO refactor
export const Header: React.FC = () => {
  return (
    <nav className="header__container">
      <div className="logo__container">
        <Link style={{ fontWeight: 'bold', color: 'white', textTransform: 'uppercase' }} to="/">
          Logo
        </Link>
      </div>
      <Search />
      <div className="avatar__container">
        <UserAvatar />
      </div>
    </nav>
  );
};
