import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ITodo } from '../TodosMachine';
import Idle from './Idle';
import { MachineContext } from '../context/MachineContext';

function ViewScreen() {
  const { machine, send } = useContext(MachineContext);

  return (
    <>
      {machine?.context?.todos?.map((item: ITodo) => (
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            direction: 'inherit',
            justifyContent: 'space-between',
            padding: 2,
          }}
          key={item?.id}
        >
          <Idle item={item} />
        </View>
      ))}
    </>
  );
}

export default ViewScreen;
