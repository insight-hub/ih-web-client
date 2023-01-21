import React from 'react';

import './UserAvatar.scss';

type Props = {
  userName: string;
  avatarSrc: string;
};

export const UserAvatar: React.FC<Props> = (props) => {
  return (
    <div className="user_avatar__container">
      {props.avatarSrc ? (
        <img src={props.avatarSrc} />
      ) : (
        <div className="user_avatar__text">{props.userName}</div>
      )}
    </div>
  );
};
