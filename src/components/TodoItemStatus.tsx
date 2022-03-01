import React from 'react';
import { ItemStatus } from './types';

const getStatusColor = (status: ItemStatus) => {
  switch (status) {
    case ItemStatus.New:
      return '#fdfd96';
    
    case ItemStatus.Ongoing:
      return '#7777dd';
  
    case ItemStatus.Complete:
      return '#77dd77';

    case ItemStatus.OnHold:
      return '#ca96fd';

    case ItemStatus.Cancelled:
      return '#000000';

    default:
      return 'transparent';
  }
}

const menuIconSVG: JSX.Element = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
    <path xmlns="http://www.w3.org/2000/svg" d="M10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12Z" fill="#252525"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6Z" fill="#252525"></path>
    <path xmlns="http://www.w3.org/2000/svg" d="M10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18Z" fill="#252525"></path>
  </svg>
);

type Props = {
  status: ItemStatus;
  onClick: VoidFunction;
};

export const TodoItemStatus = (props: Props): JSX.Element => {
  return (
    <div
      style={{
        width: 40,
        borderRadius: '0px 20px 20px 0px',
        backgroundColor: getStatusColor(props.status),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        onClick={() => { props.onClick(); }}
        style={{
          padding: 10,
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        { menuIconSVG }
      </div>
    </div>
  );
}
