import React from 'react';
import { View, Button, Text } from 'react-native';
import { send } from 'xstate';
import { ITodo } from '../TodosMachine';

function Idle({ item }: { item: ITodo }) {
  return (
    <div>
      <Text
        style={{
          padding: 2,
          borderColor: '#f0f0f0',
          backgroundColor: '#f9f9f9',
          borderBottomColor: 'blue',
          textDecorationLine: `${item?.cleared ? 'line-through' : 'none'}`,
        }}
        onPress={() =>
          send({
            type: 'MARK_DONE',
            id: item?.id,
          })
        }
      >
        - {item?.text} -{new Date().toDateString()}
      </Text>

      <View style={{ padding: 1 }}>
        <Button
          title='Edit'
          color='orange'
          accessibilityLabel='Tap to Decrypt Data'
          onPress={() => console?.log('Yoh')}
        />
      </View>
    </div>
  );
}

export default Idle;
