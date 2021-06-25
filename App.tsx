import React from 'react';
import MachineState from './context/MachineContext';
import Components from './components';
export default function App() {
  return (
    <MachineState>
      <Components />
    </MachineState>
  );
}
