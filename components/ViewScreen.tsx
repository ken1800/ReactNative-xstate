import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ITodo } from '../TodosMachine';
import Idle from './Idle';
import { MachineContext } from '../context/MachineContext';

function ViewScreen() {
  const { machine } = useContext(MachineContext);

  return (
    <View style={styles.ListContainer}>
      {machine?.context?.todos?.map((item: ITodo) => (
        <View style={styles.ItemContainer} key={item?.id}>
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
  ItemContainer: {},
});

export default ViewScreen;
