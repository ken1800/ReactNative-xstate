import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ITodo } from '../TodosMachine';
import Idle from './Idle';
import { MachineContext } from '../context/MachineContext';

function ViewScreen() {
  const { machine, send } = useContext(MachineContext);

  return (
    <View style={styles.ListContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  ListContainer: {
    justifyContent: 'center',
    padding: 4,
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 4,
    borderColor: 'white',
  },
});

export default ViewScreen;
