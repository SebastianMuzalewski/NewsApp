/* @Page: 1 | Home Page
 * Breifing: Component is used to render home page of the application.



  This home page will focus on ourr ability to demonstrate navigation between pages, and using 
  the Modal component, Pressable component will also be incorporated into this section. 

 */

import FinancialNews from './FinancialNews';
import ViewLatest from './ViewLatest';

import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';
// our components imported above.
import { Alert } from 'react-native';
import { Pressable } from 'react-native';
// pressable imported for modal to be interactive.
import { useState } from 'react';
// import useState to track our modal state.

import { MaterialIcons } from '@expo/vector-icons';
// Just a package that was founded which has icons we can use, if needed.

function Home({ navigation }) {
  // a state will need to be tracking our modal.
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the News App</Text>

      <Modal
        visible={modalOpen}
        animationType="fade"
        style={styles.modalSection}
      >
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={styles.modalToggle}
            onPress={() => setModalOpen(false)}
          />

          <Text style={styles.modalText}>
            This is a react native application that will be used to demonstrate
            Jonathan and Sebastian's abilities to create a mobile application.
          </Text>
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <Button
        title="View Latest News"
        onPress={() => navigation.navigate('ViewLatest')}
        styles={styles.button}
      ></Button>

      <Button
        title="View Financial News"
        onPress={() => navigation.navigate('FinancialNews')}
        styles={styles.button}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CF1D4',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 40,
    position: 'relative',
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
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 40,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: 'blue',
    backgroundColor: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 20,
    padding: 35,
    borderRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalSection: {
    flex: 13,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
