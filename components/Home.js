/* @Page: 1 | Home Page
 * Breifing: Component is used to render home page of the application.

  The home page will cotain 

 */

import FinancialNews from './FinancialNews';
import ViewLatest from './ViewLatest';

import { NavigationContainer } from '@react-navigation/native';


import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, Modal} from 'react-native';
import { Alert } from 'react-native';



function Home({ navigation }) {
  return (
    // make a view in a modal to display home page, make a button to navigate to the viewLatest page and make a button to navigate to the financial news page and put them in an alert to let the user know they are being navigated to a new page
    <View style={styles.container}>


      <Modal>
   
   
      <Text style={styles.text}>Welcome to the News App</Text>
   
   
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
   


      </Modal>
   
   
   
    </View>
    
      
  )
}

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
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
})


export default Home
