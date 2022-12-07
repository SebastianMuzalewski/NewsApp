import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import {FlatList,ActivityIndicator} from 'react-native'; 
import {useState, useEffect} from 'react';

export const FinancialNews = () => {
  // define state variables
  const [listData, setListData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  // Handler function to make the API call to an endpoint
  const getFinanceNewsData = () => {
    return fetch('https://example-data.draftbit.com/sneakers?_limit=5') // replace the URl with your own API endpoint
      .then(response => response.json())
      .then(json => setListData(json))
      .catch(error => console.error(error)) // you can add your error handling method if you have
      .finally(() => setLoading(false)); // make sure to set loading variable to false to stop loading once the data is fetched inside the response successfully.
  };

  // define a useEffect hook from React to make the API call when the Custom Component mounts
  React.useEffect(() => {
    getFinanceNewsData();
  }, []);

  const renderItem = ({ item }) => {
    return <Text>{item.title}</Text>;
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>Financial News below</Text>
      {isLoading ? (
        <ActivityIndicator size='large' />
      ) : (
        // The FlatList component here is just an example to show the data in a list
        <FlatList
          data={listData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};





const styles = StyleSheet.create({
})

export default FinancialNews
