import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { TodoContainer } from './TodoContainer';
import { Container, ContainerFetchResult } from './types';

const CreateNewItemSVG: JSX.Element = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height={30} width={30}>
    <path xmlns="http://www.w3.org/2000/svg" d="M16.2929 2.29289C16.6834 1.90237 17.3166 1.90237 17.7071 2.29289L21.7071 6.29289C22.0976 6.68342 22.0976 7.31658 21.7071 7.70711L8.70711 20.7071C8.51957 20.8946 8.26522 21 8 21H4C3.44772 21 3 20.5523 3 20V16C3 15.7348 3.10536 15.4804 3.29289 15.2929L13.2927 5.2931L16.2929 2.29289ZM14 7.41421L5 16.4142V19H7.58579L16.5858 10L14 7.41421ZM18 8.58579L19.5858 7L17 4.41421L15.4142 6L18 8.58579Z" fill="#0D0D0D"></path>
  </svg>
);

type DividerProps = { height: number };
const Divider = (props: DividerProps): JSX.Element => (<div style={{ height: props.height, flexShrink: 0 }} />);

export const App = (): JSX.Element => {

  const [labels, setLabels] = useState<string[]>([]);
  const [containers, setContainers] = useState<Container[]>([]);
  console.log(containers, labels); // TODO: delete

  // Fetch todo items data from server
  useEffect(() => {
    fetch('/data')
    .then(res => res.json())
    .then((data: ContainerFetchResult) => {
      console.log('Fetched raw data...');
      console.log(data);
      console.log('Setting labels...');
      setLabels(data.labels);
      console.log(data.labels);
      console.log('Processing data...');
      const tempContainers: Container[] = [];

      // Divide the fetched items by labels
      for (let i = 0; i < data.items.length; i++) {
        const item = data.items[i];
        const targetIndex = tempContainers.findIndex(container => container.label == item.label);

        // Insert new container to list
        if (targetIndex !== -1) {
          tempContainers[targetIndex].items.push(item);
        }
        // Update existing container
        else {
          tempContainers.push({ label: item.label, items: [item] });
        }
      }

      console.log('Setting containers...');
      setContainers(tempContainers);
    })
    .catch(e => {
      console.error(e);
      // TODO: handle error
    });
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: 'white',
        fontFamily: `"??????????????????", NanumBarunGothic, "????????????", NanumGothic, "Malgun Gothic", "??????", dotum, "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif`,
        overflow: 'scroll',
      }}
    >
      <Divider height={100} />
      <Button
        width="500px"
        height={100}
        content={CreateNewItemSVG}
        color="#ffffff"
        hoverColor="#fafafa"
        onClick={() => {
          console.log('Click!'); // TODO: 
        }}
      />
      <Divider height={100} />
      {
        containers.map((container) => (
          <div key={container.label}>
            <TodoContainer container={container} />
            <Divider height={50} />
          </div>
        ))
      }
    </div>
  );
}
