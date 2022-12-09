/* @Page: 4 | Financial News
 * Breifing: Component is used to render financialNews api page of the application.
 * API01: View news from api | Status: Not Implemented | Purpose: To show a list of news apis
 * 
 */

import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import {FlatList,ActivityIndicator} from 'react-native'; 
import {useState, useEffect} from 'react';

import Animations from './Animations';

function FinancialNews({navigation}) {
    return (
     <View>
        <Text>Test.</Text>
        <Button title="Next Page" onPress={() => navigation.navigate("Animations")}></Button>
     </View>
    )
  }

const styles = StyleSheet.create({
})

export default FinancialNews
