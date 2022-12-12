/* @Navbar Page: 1| View Latest Page
 * Breifing: Page is responsible to render the latest news and provided users with the ability to comment on those news sections
 * API02: RefreshAPI | Status: Completed | Purpose: To render a random api based on a button being pressed
 */

// API FOR THIS PAGE - (https://newsapi.org/) 
// Jonathan's API Key - 4a5e392a47c042e6b534cffbfe4fa64d


import React from 'react';
// Necessary react native components 
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
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={styles.text}>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
              <Button
                title="Leave a comment"
                onPress={() => navigation.navigate('Comment')}
                styles={styles.button}
              ></Button>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },

  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red',
  },
});

export default ViewLatest;