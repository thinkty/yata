import React from 'react';
import { TodoItemIcon } from './TodoItemIcon';
import { TodoItemStatus } from './TodoItemStatus';
import { ItemStatus, ItemType } from './types';

type Props = {
  itemHeight: number;
  type: ItemType;
  status: ItemStatus;
} & typeof defaultProps;

const defaultProps = {
  itemHeight: 100,
};

export const TodoItem = (props: Props): JSX.Element => {

  return (
    <div
      style={{
        width: '100%',
        height: props.itemHeight,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
      }}
    >
      <TodoItemIcon type={props.type} />

      {/* Todo Item content */}
      <div style={{ flex: 1 }}>

      </div>

      <TodoItemStatus
        status={props.status}
        onClick={() => {
          console.log('Clicked on Status!') // TODO:
        }}
      />
    </div>
  );
}
TodoItem.defaultProps = defaultProps;
