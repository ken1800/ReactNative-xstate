import React from 'react';
import MachineState from './context/MachineContext';
import Components from './components';
import { View, StyleSheet } from 'react-native';
export default function App() {
  return (
    <MachineState>
      <Components />
    </MachineState>
  );
}

const style = StyleSheet.create({
  appContainter: {
    backgroundColor: '#ffff',
  },
});
