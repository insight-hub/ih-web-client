import React, { useCallback } from 'react';

import { HourLine } from './HourLine';
import { DailyColumn } from './DailyColumn';

import './Calendar.scss';
import range from 'src/utils/range';

export enum calendarMode {
  Daily,
  Weekly,
  Monthly,
  Yearly,
}

export type Props = {
  timestamp: Date;
  mode: calendarMode;
};

//TODO refactor layout
export const Calendar: React.FC<Props> = (props) => {
  const shouldRenderHourLine =
    props.mode === calendarMode.Daily || props.mode || calendarMode.Weekly;

  const renderCalendar = useCallback(() => {
    switch (props.mode) {
      case calendarMode.Daily:
        return <DailyColumn />;
      case calendarMode.Weekly:
        return range(1, 7).map((_, i) => (
          <div key={i} className="week-item b-r">
            <DailyColumn />
          </div>
        ));
      case calendarMode.Monthly:
        return <DailyColumn />;
      case calendarMode.Yearly:
        return <DailyColumn />;
    }
  }, [props.mode]);

  return (
    <div className="calendar">
      <div className="calendar__internal row">
        {shouldRenderHourLine && <HourLine />}
        <div className="col-11-xs d-flex">{renderCalendar()}</div>
      </div>
    </div>
  );
};
