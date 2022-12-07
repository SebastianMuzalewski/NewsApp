/*
Jonathan and Sebastian main code base, for news applciation.  


(https://newsapi.org/) - first api source. 
- key 4a5e392a47c042e6b534cffbfe4fa64d


(https://rapidapi.com/mikilior1/api/FinancialTimes) - second api source.
*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';

import Home from './components/Home';
import Search from './components/Search';
import ViewLatest from './components/ViewLatest';
// All components imported, navigation only within this app.js. 




//START OF NAVIGATION IMPORTS
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//END OF NAVIGATION IMPORTS
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="ViewLatest" component={ViewLatest} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
