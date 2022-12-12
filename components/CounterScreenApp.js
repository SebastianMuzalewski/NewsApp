/*
This screen will contain the configurations 
for the counter application utilzing touchable 
components and redux content.
*/

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
} from 'react-native';

//REDUX IMPORTS
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import store from '../redux/store';

import { increment } from '../redux/reducer';
import { decrement } from '../redux/reducer';
import { reset } from '../redux/reducer';
// END OF REDUX IMPORTS

const CounterScreen = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counter}</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableHighlight
          style={{ ...styles.button, backgroundColor: 'red' }}
          onPress={() => dispatch(decrement())}
        >
          <Text>-</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{ ...styles.button, backgroundColor: 'grey' }}
          onPress={() => dispatch(reset())}
        >
          <Text>Reset</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{ ...styles.button, backgroundColor: 'limegreen' }}
          onPress={() => dispatch(increment())}
        >
          <Text>+</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default function CounterScreenApp() {
  return (
    <Provider store={store}>
      <CounterScreen />
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    marginBottom: 20,
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});
