import React, { useState } from 'react';

type Props = {
  content: string | JSX.Element;
  height: number;
  width: number | string;
  color: string;
  hoverColor: string;
  onClick: VoidFunction;
}

export const Button = (props: Props): JSX.Element => {
  const [ isHovering, setHover ] = useState<boolean>(false);

  return (
    <div
      onClick={() => { props.onClick(); }}
      onMouseEnter={() => { setHover(true) }}
      onMouseLeave={() => { setHover(false) }}
      style={{
        height: props.height,
        width: props.width,
        flexShrink: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        cursor: isHovering ? 'pointer' : 'default',
        backgroundColor: isHovering ? props.hoverColor : props.color,
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
      }}
    >
      { props.content }
    </div>
  );
}
