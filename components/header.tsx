import React from 'react';
import { View, Text } from 'react-native';

function header() {
  return (
    <View>
      <Text
        style={{
          marginBottom: '5%',
          color: 'black',
          fontStyle: 'italic',
          borderColor: 'blue',
        }}
      >
        Todo App
      </Text>
    </View>
  );
}

export default header;
