import React from 'react';

import UserAvatar from '../components/avatar/UserAvatarContainer';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <div className="header__container">
      <nav className="navigation__container">
        <div className="logo__container"></div>
        <div className="search__container"></div>
        <UserAvatar />
      </nav>
    </div>
  );
};
