import React from 'react';
import { TodoItem } from './TodoItem';
import { ItemStatus, ItemType } from './types';

type Props = {
  label: string;
} & typeof defaultProps;

const defaultProps = {};

export const TodoContainer = (props: Props): JSX.Element => {
  return (
    <div
      style={{
        width: 500, // TODO: temporary
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 5
        }}
      >
        <div style={{height: '80%', width: 3, backgroundColor: 'black' }} />
        <div style={{ fontWeight: 'bold', }}>
          { props.label }
        </div>
      </div>
      <TodoItem type={ItemType.Project} status={ItemStatus.Ongoing} />
      <TodoItem type={ItemType.Basic} />
    </div>
  );
}
TodoContainer.defaultProps = defaultProps;
