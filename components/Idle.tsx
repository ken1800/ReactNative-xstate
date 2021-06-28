import React, { useContext } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { ITodo } from '../TodosMachine';
import { MachineContext } from '../context/MachineContext';

function Idle({ item }: { item: ITodo }) {
  const { send } = useContext(MachineContext);
  return (
    <View style={styles.Container}>
      <Text
        style={{
          padding: 2,
          borderColor: '#f0f0f0',
          backgroundColor: '#f9f9f9',
          textDecorationLine: `${item?.cleared ? 'line-through' : 'none'}`,
          marginRight: 2,
          fontSize: 20,
          marginEnd: 5,
        }}
        onPress={() =>
          send({
            type: 'MARK_DONE',
            id: item?.id,
          })
        }
      >
        {item?.text}
      </Text>

      <View
        style={{
          padding: 4,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        {!item.cleared && (
          <View
            style={{
              padding: 2,
            }}
          >
            <Button
              title='Edt'
              color='orange'
              onPress={() =>
                send({
                  type: 'EDIT',
                  editItem: item,
                })
              }
            />
          </View>
        )}
        <View
          style={{
            padding: 2,
          }}
        >
          <Button
            title='Del'
            color='red'
            onPress={() =>
              send({
                type: 'DELETE',
                id: item?.id,
              })
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
  },
});

export default Idle;
