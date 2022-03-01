import React from 'react';
import { ItemType } from './types';

const IconSize = 20;

const BasicIconSVG = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height={IconSize} width={IconSize}>
    <path xmlns="http://www.w3.org/2000/svg" d="M8 3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3H18C19.1046 3 20 3.89543 20 5V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V5C4 3.89543 4.89543 3 6 3H8ZM8 5H6V20H18V5H16V6C16 6.55228 15.5523 7 15 7H9C8.44772 7 8 6.55228 8 6V5ZM14 4H10V5H14V4ZM15.7071 10.7929C16.0976 11.1834 16.0976 11.8166 15.7071 12.2071L11.7071 16.2071C11.3166 16.5976 10.6834 16.5976 10.2929 16.2071L8.29289 14.2071C7.90237 13.8166 7.90237 13.1834 8.29289 12.7929C8.68342 12.4024 9.31658 12.4024 9.70711 12.7929L11 14.0858L14.2929 10.7929C14.6834 10.4024 15.3166 10.4024 15.7071 10.7929Z" fill="#0D0D0D"></path>
  </svg>
);

const ProjectIconSVG = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height={IconSize} width={IconSize}>
    <path xmlns="http://www.w3.org/2000/svg" d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM13.4142 13.4143L15.5356 8.46451L10.5858 10.5858L8.46448 15.5356L13.4142 13.4143Z" fill="#0D0D0D"></path>
  </svg>
);

const iconSvgSelector = (type: ItemType) => {
  switch (type) {
    case ItemType.Basic:
      return <BasicIconSVG />;

    case ItemType.Project:
      return <ProjectIconSVG />;

    default:
      return <div />;
  }
}

type Props = {
  type: ItemType;
}

export const TodoItemIcon = (props: Props): JSX.Element => {

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      }}
    >
      { iconSvgSelector(props.type) }
    </div>
  );
}
