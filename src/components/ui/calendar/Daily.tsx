import React from 'react';

import { HourLine } from './HourLine';

export const Daily: React.FC = () => {
  const timestamp = new Date();

  return (
    <div className="row">
      <div className="col-1-md col-2-xs col align-end pr-1 b-r">
        <HourLine timestamp={timestamp} />
      </div>
      <div className="col-10-xs col-11-md" style={{ position: 'relative' }}>
        <div className="red-line" style={{ left: '-5px', position: 'absolute', width: '100%' }}>
          <div
            className="red-dot"
            style={{
              width: '10px',
              height: '10px',
              left: '-5',
              backgroundColor: 'red',
              borderRadius: '100%',
            }}
          ></div>
          <div
            className="red-line"
            style={{
              borderBottom: '1px solid red',
              position: 'absolute',
              width: '100%',
              top: '5px',
              left: '5px',
            }}
          />
        </div>
      </div>
    </div>
  );
};
