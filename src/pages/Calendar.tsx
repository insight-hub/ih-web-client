import React, { useState } from 'react';

import { ButtonGroup } from 'src/components/buttonGroup/ButtonGroup';
import { Button } from 'src/components/button/Button';
import { Calendar as UiCalendar } from 'src/components/calendar';
import { calendarMode } from 'src/components/calendar/Calendar';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'Jume',
  'July',
  'August',
  'September',
  'October',
  'November',
  'Desember',
];

export const Calendar = () => {
  const timestamp = new Date();
  const monthNum = timestamp.getMonth();
  const year = timestamp.getFullYear();

  const [mode, setMode] = useState(calendarMode.Daily);

  const modeNameMap = {
    Day: calendarMode.Daily,
    Week: calendarMode.Weekly,
    Month: calendarMode.Monthly,
    Year: calendarMode.Yearly,
  };

  return (
    <>
      <div className="calendar__header row align-center pb-1 b-bt">
        <div className="col-5-xs col-3-md font-xl">
          <span className="fw-bold">{months[monthNum]}</span> {year}
        </div>
        <div className="col-7-xs">
          <ButtonGroup>
            {Object.entries(modeNameMap).map(([key, value]) => (
              <Button key={key} title={key} onClick={() => setMode(value)} />
            ))}
          </ButtonGroup>
        </div>
      </div>
      <div className="row pt-2">
        <div className="calendar__aside col-4-xs col-2-md">
          <span className="font-md fw-bold">My calendars</span>
          <div className="row pt-2">
            <input type="checkbox" className="m-0 mr-1" />
            <div className="font-sm">Ruslan Savinovskii</div>
          </div>
        </div>
        <div className="calendar__body col-8-xs col-10-md">
          <UiCalendar timestamp={timestamp} mode={mode} />
        </div>
      </div>
    </>
  );
};
