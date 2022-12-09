/* @Page: 3 | ViewLatest
 * Breifing: Component is used to render the viewLastest news page of the application.
 * API02: RefreshAPI | Status: Started | Purpose: To render a random api based on a button being pressed
 * Animation04: Sequence animation | Status : Incomplete | Purpose: NA

API FOR THIS PAGE - (https://newsapi.org/) 
Jonathan's API Key - 4a5e392a47c042e6b534cffbfe4fa64d
*/

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FinancialNews from './FinancialNews';
import Comment from './Comment';
// this is a new component that we will use for a user to input there message this component will demonstrate alerts.

import { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';

import { Modal, Pressable, Alert } from 'react-native';

function ViewLatest({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [response, setResponse] = useState();
  // states set

  //make the api call to get the news articles
  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=4a5e392a47c042e6b534cffbfe4fa64d'
    )
      .then((response) => response.json())
      .then((json) => setData(json.articles))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    // make a flat list to display the articles by title and description ,put them in a card and make the card display the content when pressed
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
              <Button
                title="Leave a comment"
                onPress={() => navigation.navigate('Comment')}
              ></Button>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});

export default ViewLatest;
