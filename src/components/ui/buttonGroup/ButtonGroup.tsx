import React, { cloneElement, ReactElement, useState } from 'react';

import './ButtonGroup.scss';

type Props = {
  children: ReactElement[];
};

export const ButtonGroup: React.FC<Props> = (props) => {
  const [activeIdx, setActiveIdx] = useState(-1);
  return (
    <div role="group" className="btn-group">
      {props.children.map((child, i) =>
        cloneElement(child, {
          ...child.props,
          key: i,
          active: i === activeIdx,
          onClick: () => {
            // TODO refactor
            child.props.onClick();
            setActiveIdx(i);
          },
        }),
      )}
    </div>
  );
};
