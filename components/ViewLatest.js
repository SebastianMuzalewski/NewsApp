import React from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native';
// api key = 4a5e392a47c042e6b534cffbfe4fa64d
//api link https://financialtimesmikilior1v1.p.rapidapi.com/getAspectsList

function ViewLatest() {

  var url =  'https://newsapi.org/v2/everything?' +
  'sortBy=popularity&' +
  'apiKey=4a5e392a47c042e6b534cffbfe4fa64d'; 

  var req = new Request(url);
  fetch(req)
  .then(function(response) {
    console.log(response.json());
  })




  return ( 
    <View>
      <Text>ViewLatest page to render latest news.</Text>
    </View>
  )
}

export default ViewLatest
