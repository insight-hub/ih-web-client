import React from 'react';

import './Button.scss';

type Props = {
  title: string;
};

export const Button: React.FC<Props> = (props) => {
  return (
    <>
      <button className="btn">{props.title}</button>
    </>
  );
};
