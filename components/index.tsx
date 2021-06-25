import React, { useContext } from 'react';
import { StatusBar, View } from 'react-native';
import Header from './header';
import ViewScreen from './ViewScreen';
import EditScreen from './editScreen';
import Add from './Add';
import { MachineContext } from '../context/MachineContext';
function index() {
  const { machine } = useContext(MachineContext);
  console.log({ ctx: machine.value });

  return (
    <View
      style={{
        padding: 30,
        flex: 1,
        backgroundColor: '#302b63',
      }}
    >
      <Header />
      <Add />
      {machine.matches('idle') && machine?.context?.todos?.length > 0 && (
        <ViewScreen />
      )}

      {machine?.matches('edit') && <EditScreen />}
      <StatusBar />
    </View>
  );
}

export default index;
