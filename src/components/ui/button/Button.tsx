import classNames from 'classnames';
import React from 'react';

import './Button.scss';

type ButtonVariant = 'primary' | 'danger' | 'secondary';

type Props = {
  title: string;
  variant?: ButtonVariant;
};

export const Button: React.FC<Props> = (props) => {
  const buttonClasses = classNames(['btn', `btn--${props.variant ?? 'primary'}`]);

  return (
    <>
      <button className={buttonClasses}>{props.title}</button>
    </>
  );
};
