/* @Page: 1 | Home Page
 * Breifing: Component is used to render home page of the application.
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
      
      <Button title="SEARCH PAGE" onPress={() => navigation.navigate("Search")}></Button>
      <Button title="VIEW LATEST" onPress={() => navigation.navigate("ViewLatest")}></Button>
    </View>
  )
}

export default Home
