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

import { useState } from 'react';

import store from '../redux/store';

import { increment } from '../redux/reducer';
import { decrement } from '../redux/reducer';
import { reset } from '../redux/reducer';
// END OF REDUX IMPORTS

function CounterScreen() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [countDisplay, setCountDisplay] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter Screen</Text>
      <Text style={styles.textdisplay}>{count}</Text>
      <TouchableHighlight
        style={[styles.button, { backgroundColor: '#00FF00' }]}
        onPress={() => dispatch(increment())}
      >
        <Text style={styles.text}>+</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.button, { backgroundColor: '#FF0000' }]}
        onPress={() => dispatch(decrement())}
      >
        <Text style={styles.text}>-</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.button, { backgroundColor: '#0000FF' }]}
        onPress={() => dispatch(reset())}
      >
        <Text style={styles.text}>Reset</Text>
      </TouchableHighlight>
    </View>
  );
}

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
    backgroundColor: '#D0D0D2',
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
  textdisplay: {
    fontSize: 50,
    marginBottom: 20,
  },
});
