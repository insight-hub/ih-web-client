import React from 'react';

import range from 'src/utils/range';

export const HourLine = (props: { timestamp: Date }) => {
  const hourRange = range(1, 12);
  const postfix = 'AM';
  return (
    <>
      {hourRange.map((hour) => (
        <div key={hour + postfix} className="font-sm fw-thin pb-2">
          {`${hour} ${postfix}`}
        </div>
      ))}
    </>
  );
};
