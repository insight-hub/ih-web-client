import React from 'react';
import range from 'src/utils/range';

export const DailyColumn = () => {
  const rowRange = range(1, 24);
  return (
    <div className="daily-column">
      {rowRange.map((item) => (
        <div key={item} className="daily-column__row" />
      ))}
    </div>
  );
};
