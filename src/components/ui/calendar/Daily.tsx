import React from 'react';
import { DailyColumn } from './DailyColumn';

import { HourLine } from './HourLine';

// TODO refactor layouts
export const Daily: React.FC = () => {
  return (
    <>
      <div className="col-1-md col-2-xs col justify-space-around align-end pr-1 b-r">
        <HourLine />
      </div>
      <div className="col-10-xs col-11-md">
        <div className="red-line__container">
          <div className="red-line">
            <div className="red-line__dot" />
            <div className="red-line__line" />
          </div>
        </div>
        <DailyColumn />
      </div>
    </>
  );
};
