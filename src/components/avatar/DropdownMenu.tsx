import React from 'react';
import { Link } from 'react-router-dom';

import './DropdownMenu.scss';

// TODO refactor
export const DropdownMenu = () => {
  return (
    <div className="menu__container">
      <div className="menu_section">
        <div className="menu_header text-regular">
          Sigled in as <span className="menu_user_name">saymurrmeow</span>
        </div>
      </div>
      <ul>
        <div className="menu_section">
          <li className="menu_list__item">
            <Link to="/profile">Your profile</Link>
          </li>
        </div>
        <div className="menu_section">
          <li className="menu_list__item">
            <Link to="/settings">Settings</Link>
          </li>
        </div>
        <div className="menu_section menu_section--non-border">
          <li className="menu_list__item">
            <Link to="/signout">Sign out</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};
