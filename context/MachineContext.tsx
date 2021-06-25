import React, { createContext } from 'react';
import { useMachine } from '@xstate/react';
import { TodosMachine } from '../TodosMachine';

export const MachineContext = createContext<any>({});

function MachineState({ children }: any) {
  const [machine, send] = useMachine(TodosMachine);

  return (
    <MachineContext.Provider
      value={{
        send,
        machine,
      }}
    >
      {children}
    </MachineContext.Provider>
  );
}

export default MachineState;
