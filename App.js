/* @authors: Sebastian/Johnathan @Date:07/12/22 
 * @Course&Section: Cross-Platfrom Mobile Development/CPAN-213-0NC
 * The purpose of this Application is to ...
 */ 

/* Programming Notes:
 * npm start | Starts the project, Select android
 * 
 */

// First API source: (https://newsapi.org/) - Key: 4a5e392a47c042e6b534cffbfe4fa64d
// Second API souuce: (https://rapidapi.com/mikilior1/api/FinancialTimes) - Key:

// Imported Components
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';

// All components imported, Navigation is only contained within app.js. 
import Home from './components/Home';
import Search from './components/Search';
import ViewLatest from './components/ViewLatest';

//START OF NAVIGATION IMPORTS
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//END OF NAVIGATION IMPORTS
const Stack = createNativeStackNavigator();

// Main App
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

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
