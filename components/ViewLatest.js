/* @Page: 3 | ViewLatest
 * Breifing: Component is used to render the viewLastest news page of the application.
 * API02: RefreshAPI | Status: Started | Purpose: To render a random api based on a button being pressed
 * Animation04: Sequence animation | Status : Incomplete | Purpose: NA
 */

import React from 'react'
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
// api key = 4a5e392a47c042e6b534cffbfe4fa64d
//api link https://financialtimesmikilior1v1.p.rapidapi.com/getAspectsList

import FinancialNews from './FinancialNews';

function ViewLatest({navigation}) {


  var url = 'https://newsapi.org/v2/everything?' +
  'q=Apple&' +
  'from=2022-12-08&' +
  'sortBy=popularity&' +
  'apiKey=4a5e392a47c042e6b534cffbfe4fa64d';

var req = new Request(url);

fetch(req)
.then(function(response) {
console.log(response.json());
})

  return ( 
    <View>
<<<<<<< HEAD
      <Text>Welcome to the latest news! </Text>
=======
      <Text>ViewLatest page to render latest news.</Text>
      <Button title="Next Page" onPress={() => navigation.navigate("FinancialNews")}></Button>
>>>>>>> 6187a771c60d6aff42995770e028e33bf134f364
    </View>
  )
}

export default ViewLatest
