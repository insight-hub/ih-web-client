import React from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.scss';

// TODO refactor
export const DropdownMenu = () => {
  return (
    <div className="menu__container">
      <div className="menu_section">
        <div className="menu_header text-regular">
          Signed in as <span className="t-bold">saymurrmeow</span>
        </div>
      </div>
      <ul className="menu_section">
        <Link to="/profile">
          <li className="menu_list__item">Your profile</li>
        </Link>
        <Link to="/calendar">
          <li className="menu_list__item">Your calendar</li>
        </Link>
      </ul>
      <ul className="menu_section">
        <Link to="/settings">
          <li className="menu_list__item">Settings</li>
        </Link>
        <Link to="/help">
          <li className="menu_list__item">Help</li>
        </Link>
      </ul>
      <ul className="menu_section menu_section--non-border"></ul>
    </div>
  );
};
