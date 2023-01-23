import React, { ReactElement } from 'react';

import './ButtonGroup.scss';

type Props = {
  children: ReactElement[];
};

export const ButtonGroup: React.FC<Props> = (props) => {
  return (
    <div role="group" className="btn-group">
      {props.children.map((child) => child)}
    </div>
  );
};
