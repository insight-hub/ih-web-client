import React, { ReactElement } from 'react';

import './ButtonGroup.scss';

type Props = {
  children: ReactElement[];
};

export const ButtonGroup: React.FC<Props> = (props) => {
  return (
    <div className="btn-group__container">
      {props.children.map((child, i) => {
        return (
          <div key={i} className="btn-group__item">
            {child}
          </div>
        );
      })}
    </div>
  );
};
