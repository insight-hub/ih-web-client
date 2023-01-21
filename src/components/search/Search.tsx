import React from 'react';

import './Search.scss';

export const Search: React.FC = () => {
  return (
    <div>
      <input className="search" placeholder="Search knowledge or people..." type="text" />
    </div>
  );
};
