import React from 'react';

import range from 'src/utils/range';

export const HourLine = () => {
  const hourRange = range(1, 24);
  const timestamp = new Date();
  timestamp.setHours(1, 20);
  return (
    <div className="col-1-md col-2-xs col justify-space-around align-end pr-1 b-r red-line__container">
      {hourRange.map((item, i) => {
        const postfix = i + 1 > 12 ? 'PM' : 'AM';
        const hour = item % 12 || 12;
        return (
          <div key={hour + postfix} className="font-sm fw-thin">
            {`${hour} ${postfix}`}
          </div>
        );
      })}
      <div
        style={{
          top: `${(960 / 24) * timestamp.getHours() - 25 + (40 / 60) * timestamp.getMinutes()}px`,
        }}
        className="red-line"
      >
        <div className="red-line__dot" />
        <div className="red-line__line" />
      </div>
    </div>
  );
};
