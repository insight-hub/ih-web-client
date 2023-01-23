import React, { useState } from 'react';

import { ButtonGroup } from '../components/ui/buttonGroup/ButtonGroup';
import { Button } from '../components/ui/button/Button';

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

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      <div className="calentar_header col-lg-12">
        <div className="row align-center font-xl">
          <div className="col-5-xs col-3-md">
            <span className="fw-bold">{months[monthNum]}</span> {year}
          </div>
          <div className="col-7-xs">
            <ButtonGroup activeIdx={activeIdx} setActiveIdx={setActiveIdx}>
              <Button title="Day" variant="primary" />
              <Button title="Week" />
              <Button title="Month" />
              <Button title="Year" />
            </ButtonGroup>
          </div>
        </div>
      </div>
    </>
  );
};
