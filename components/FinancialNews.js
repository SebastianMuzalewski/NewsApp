/* @Navbar Page: 2 | Financial News
 * Breifing: This is responsible for rendering financialNews api page of the application.
 * As well provide a search functionality for users to search for an new article
 * API01: View news from api | Status: Not Implemented | Purpose: To show a list of news apis
 * Animation03: Shaking Search | Status; Nearly Complete | Purpose: To show the user where the search bar is
 */

import React from 'react'

// Necessary react native components 
import { StyleSheet, Text, View, Button, Animated, Easing} from 'react-native';
import {FlatList, ActivityIndicator} from 'react-native'; 
import {useState, useEffect, useRef} from 'react';


// Function below to fetch data from the financial news api to return market news
// Where the search bar will be imported
import Search from "./Search" 
StyleSheet


function DisplayFinanceNews(){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const API = 'https://api.marketaux.com/v1/news/all?symbols=TSLA%2CAMZN%2CMSFT&filter_entities=true&language=en&api_token=ab5LvS5Ha5miJ57KuwP1JgZUmVi4iph8aCjqaY10'

  // display the data from the api in a flatlist 
  useEffect(() => {

    fetch(API)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }
  , []);
    return(
      <View style={styles.container}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.title}, {item.description}</Text>
            )}
          />
        )}
      </View>
    );
}



function FinancialNews({navigation}) {
  // Search bar animation
  const translation = useRef(
    new Animated.ValueXY({ x: 0, y: 0 })
  ).current;
  useEffect(() => {
    Animated.sequence([
      Animated.spring(translation.x, {
        toValue: -100,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.spring(translation.x, {
          toValue: -100,
          useNativeDriver: true,
        }),
        Animated.spring(translation.x, {
          toValue: 100,
          useNativeDriver: true,
        }),
      ]),
      Animated.spring(translation.x, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
 




  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{translateX: translation.x }]}}>
        <DisplayFinanceNews/>
      </Animated.View>
    </View>
  )}
  
  // Stylesheet
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#CF1D4',
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
  }})

export default FinancialNews