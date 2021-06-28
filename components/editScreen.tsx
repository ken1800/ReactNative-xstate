import React, { useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { MachineContext } from '../context/MachineContext';
function editScreen() {
  const { machine, send } = useContext(MachineContext);
  return (
    <View>
      <View
        style={{
          padding: 2,
          flexDirection: 'row',
        }}
      >
        <TextInput
          style={{
            borderColor: 'black',
            padding: 4,
            borderBottomWidth: 2,
            marginRight: 5,
          }}
          value={machine?.context?.editItem?.text}
          onChangeText={(e) =>
            send({
              type: 'EDITING',
              text: e,
            })
          }
        />
        <Button
          title='Submit'
          onPress={() =>
            send({
              type: 'SUBMIT',
            })
          }
          color='black'
        />
      </View>
    </View>
  );
}

export default editScreen;
