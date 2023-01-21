import React, { useEffect, useRef, useState } from 'react';

import { DropdownMenu } from './DropdownMenu';

import './UserAvatar.scss';

type Props = {
  userName: string;
  avatarSrc: string;
};

export const UserAvatar: React.FC<Props> = (props) => {
  const wapperRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const onClickOutside = (e: Event) => {
      if (wapperRef.current && !wapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [wapperRef]);

  return (
    <div className="user_avatar__container" ref={wapperRef}>
      <span onClick={handleClick}>
        {props.avatarSrc ? (
          <img src={props.avatarSrc} />
        ) : (
          <div className="user_avatar__text">{props.userName}</div>
        )}
      </span>
      {isOpen && <DropdownMenu />}
    </div>
  );
};
