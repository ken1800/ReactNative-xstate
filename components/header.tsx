import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function header() {
  return (
    <View style={styles.containter}>
      <Text style={styles.text}>Todo App</Text>
    </View>
  );
}

export default header;

const styles = StyleSheet.create({
  containter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#f7f9bd',
    marginBottom: 2,
  },
});
