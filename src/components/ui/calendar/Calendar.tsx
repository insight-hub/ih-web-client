import React from 'react';

import { Daily } from './Daily';

import './Calendar.scss';

export const Calendar: React.FC = () => {
  return (
    <div className="calendar">
      <div className="calendar__internal row">
        <Daily />
      </div>
    </div>
  );
};
