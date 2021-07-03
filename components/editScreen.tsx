import React, { useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { MachineContext } from '../context/MachineContext';
function editScreen() {
  const { machine, send } = useContext(MachineContext);
  return (
    <View>
      <View style={styles.Container}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
          }}
        >
          Edit
        </Text>
        <TextInput
          style={styles.text}
          value={machine?.context?.editItem?.text}
          onChangeText={(e) =>
            send({
              type: 'EDITING',
              text: e,
            })
          }
        />
        <View style={styles.button}>
          <Button
            title='Submit'
            onPress={() =>
              send({
                type: 'SUBMIT',
              })
            }
            color='#7799f4'
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: 5,
    alignItems: 'center',
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
  button: {
    padding: 10,
    width: 100,
  },
});
export default editScreen;
