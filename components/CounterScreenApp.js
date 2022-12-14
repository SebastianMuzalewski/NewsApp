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
    // make a view for buttons and text to display the counter, make sure the buttons are touchable and the text is centered and the number is large
    <View style={styles.container}>
      <Text style={styles.text}>{counter}</Text>
      <View style={styles.button}>
        <TouchableHighlight
          onPress={() => dispatch(increment())}
          style={styles.button}
        >
          <Text style={styles.text}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => dispatch(decrement())}
          style={styles.button}
        >
          <Text style={styles.text}>-</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => dispatch(reset())}
          style={styles.button}
        >
          <Text style={styles.text}>Reset</Text>
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
});
