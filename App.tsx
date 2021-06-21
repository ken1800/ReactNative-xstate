import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, FlatList } from 'react-native';
import { useMachine } from '@xstate/react';
import { TodosMachine } from './TodosMachine';
import Idle from './components/Idle';

export default function App() {
  const [machine, send] = useMachine(TodosMachine);
  const [bool, setBool] = useState(true);
  let currentState = machine?.value;
  useEffect(() => {}, [currentState, bool]);
  return (
    <View
      style={{
        padding: 50,
        flex: 4,
        flexDirection: 'column',
      }}
    >
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

      <View>
        <View>
          <FlatList
            data={machine?.context?.todos}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  direction: 'inherit',
                  justifyContent: 'space-between',
                  padding: 2,
                }}
              >
                {bool && (
                  <>
                    <Idle item={item} />
                  </>
                )}
              </View>
            )}
          />

          {!bool && (
            <View>
              {console?.log('Editing this thing man')}
              <TextInput
                style={{
                  borderColor: 'black',
                  padding: 4,
                  borderBottomWidth: 2,
                }}
                // onChangeText={setTextEdit}
              />
              <Button
                title='Submit'
                onPress={() => console.log('Submit Edit')}
                color='black'
              />
            </View>
          )}
        </View>
      </View>

      <StatusBar style='auto' />
    </View>
  );
}
