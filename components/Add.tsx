import React, { useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { MachineContext } from '../context/MachineContext';

function Add() {
  const { send, machine } = useContext(MachineContext);

  return (
    <View style={styles.containter}>
      <TextInput
        style={styles.text}
        onChangeText={(e) =>
          send({
            type: 'ADDING',
            text: e,
          })
        }
        value={machine?.context?.text}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.Button}>
          <Button
            title='Clear'
            onPress={() =>
              send({
                type: 'CLEAR_TODOS',
              })
            }
            color='#39a3c6'
          />
        </View>
        <View style={styles.Button}>
          <Button
            title='Create'
            onPress={() =>
              send({
                type: 'ADD_TODO',
              })
            }
            disabled={!machine?.context?.text}
            color='#248c2e'
          />
        </View>
      </View>
    </View>
  );
}

export default Add;

const styles = StyleSheet.create({
  containter: {
    padding: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 2,
  },
  text: {
    height: 40,
    paddingLeft: 6,
    margin: 5,
    borderColor: '#ffffff',
    borderWidth: 1,
    color: 'white',
    fontSize: 15,
    borderRadius: 10,
  },

  Button: {
    borderWidth: 1,
    borderRadius: 10,
    width: 100,
    elevation: 100,
  },
});
