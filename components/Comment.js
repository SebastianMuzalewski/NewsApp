/* @Comment Page: - | Comment Page
 * Breifing: This page will demonstrate our ability to produce alerts 
 * when a user enters in their comment and presses a button. 
 */

import React from 'react';
// Necessary react native components 
import { StyleSheet, Text, View, TextInput , Button} from 'react-native';

// Alert component
// Which handle alerts when user presses a button.
import { Alert } from 'react-native';

function Comment() {
 
  return (
    // A View which contains the text input and the button, and make an alert 
    // when the button is pressed to let the user know they are about to submit a comment

    <View style={styles.container}>
      <Text style={styles.text}>Tell us about  the interesting article you saw on the view latest news page.  </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your comment here"
        placeholderTextColor="black"
      />
      <Button
        title="Submit"
        onPress={() => Alert.alert('Your comment has been submitted')}
      />
    </View>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default Comment;