import React from 'react';

import UserAvatar from '../components/avatar/UserAvatarContainer';
import './Header.scss';

// TODO refactor
export const Header: React.FC = () => {
  return (
    <div className="header__container">
      <nav className="navigation__container">
        <div className="logo__container"></div>
        <div className="search__container"></div>
      </nav>
      <div className="avatar__container">
        <UserAvatar />
      </div>
    </div>
  );
};
