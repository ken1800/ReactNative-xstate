import React, { useContext } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { ITodo } from '../TodosMachine';
import { MachineContext } from '../context/MachineContext';

function Idle({ item }: { item: ITodo }) {
  const { send } = useContext(MachineContext);
  return (
    <View style={styles(item).Container}>
      <Text
        style={styles(item).Text}
        onPress={() =>
          send({
            type: 'MARK_DONE',
            id: item?.id,
          })
        }
      >
        {item?.text}
      </Text>

      <View style={styles(item).ButtonContainer}>
        {!item.cleared && (
          <View style={styles(item).Button}>
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

const styles = (item: any) =>
  StyleSheet.create({
    Container: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      borderColor: 'gray',
      borderBottomWidth: 1,
      borderBottomEndRadius: 15,
      borderBottomStartRadius: 15,
      padding: 2,
    },
    Text: {
      textDecorationLine: `${item?.cleared ? 'line-through' : 'none'}`,
      color: 'white',
      fontSize: 14,
    },
    ButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
    },
    Button: {
      padding: 2,
    },
  });

export default Idle;
