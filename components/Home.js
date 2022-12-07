/* @Page: 1 | Home Page
 * Component is used to render home page of the application.
 * 
 * 
 */

import Search from './Search';
//import ViewLatest from './components/ViewLatest';

import React from 'react'
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

function Home({ navigation }) {
  return (
    <View>
      <Text>Home page to render Application description.</Text>
      
      <Button title="Next Page" onPress={() => navigation.navigate("Search")}></Button>
    </View>
  )
}

export default Home
