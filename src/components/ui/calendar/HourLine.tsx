import React from 'react';

import range from 'src/utils/range';

export const HourLine = () => {
  const hourRange = range(1, 24);
  return (
    <>
      {hourRange.map((item, i) => {
        const postfix = i + 1 > 12 ? 'PM' : 'AM';
        const hour = item % 12 || 12;
        return (
          <div key={hour + postfix} className="font-sm fw-thin">
            {`${hour} ${postfix}`}
          </div>
        );
      })}
    </>
  );
};
