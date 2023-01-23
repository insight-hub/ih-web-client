import classNames from 'classnames';
import React, { ReactElement } from 'react';

import './ButtonGroup.scss';

type Props = {
  activeIdx: number;
  setActiveIdx: (idx: number) => void;
  children: ReactElement[];
};

export const ButtonGroup: React.FC<Props> = (props) => {
  return (
    <div className="btn-group__container">
      {props.children.map((child, i) => {
        const itemClasses = classNames('btn-group__item', {
          'btn-group__item--active': props.activeIdx === i,
        });
        return (
          <div key={i} className={itemClasses} onClick={() => props.setActiveIdx(i)}>
            {child}
          </div>
        );
      })}
    </div>
  );
};
