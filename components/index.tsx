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
        padding: 50,
        flex: 4,
        flexDirection: 'column',
      }}
    >
      <Header />

      <Add />

      {machine.matches('idle') && <ViewScreen />}

      {machine?.matches('edit') && <EditScreen />}
      <StatusBar />
    </View>
  );
}

export default index;
