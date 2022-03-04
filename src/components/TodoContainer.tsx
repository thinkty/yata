import React from 'react';
import { TodoItem } from './TodoItem';
import { Container, toItemType, toItemStatus } from './types';

type Props = {
  container: Container;
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
          gap: 5,
        }}
      >
        <div style={{height: '80%', width: 3, backgroundColor: 'black' }} />
        <div style={{ fontWeight: 'bold', }}>
          { props.container.label }
        </div>
      </div>
      {
        props.container.items.map((item) => (
          <TodoItem
            key={item.id}
            type={toItemType(item.type)}
            status={toItemStatus(item.status)}
          />
        ))
      }
    </div>
  );
}
TodoContainer.defaultProps = defaultProps;
