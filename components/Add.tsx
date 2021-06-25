import React, { useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { MachineContext } from '../context/MachineContext';

function Add() {
  const { send, machine } = useContext(MachineContext);

  return (
    <View>
      <TextInput
        style={{
          borderColor: 'black',
          padding: 4,
          borderBottomWidth: 2,
        }}
        onChangeText={(e) =>
          send({
            type: 'ADDING',
            text: e,
          })
        }
        value={machine?.context?.text}
      />
      <View
        style={{
          padding: 7,
          width: '80%',
          marginBottom: '10%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Button
          title='Add'
          onPress={() =>
            send({
              type: 'ADD_TODO',
            })
          }
          disabled={!machine?.context?.text}
        />
        <Button
          title='Clear'
          onPress={() =>
            send({
              type: 'CLEAR_TODOS',
            })
          }
          color='black'
        />
      </View>
    </View>
  );
}

export default Add;
