/* @authors: Sebastian/Johnathan @Date:07/12/22
 * @Course&Section: Cross-Platfrom Mobile Development/CPAN-213-0NC
 * The purpose of this Application is to design a friendly news applications for users
 * to enjoy. We provide pages that users can visit such as Latest News, Financial News, Dev Page
 * and Progress Bar page.
 */

/* Programming Notes:
 * npm start | Starts the project, Select android {a}
 * npm install "Whatever pacakages" | Instal the neccessary packages for our application to start running
 */

// First API source: (https://newsapi.org/) - Key: 4a5e392a47c042e6b534cffbfe4fa64d
// Imported Components
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

// All components imported, Navigation is only contained within app.js.
import Home from './components/Home';
import Search from './components/Search';
import ViewLatest from './components/ViewLatest';
import About from './components/About';
import SecondaryAnimation from './components/SecondaryAnimation';
import Comment from './components/Comment';
import ProgressBar from './components/ProgressBar';
import CounterScreenApp from './components/CounterScreenApp';
import GetStockPrice from './components/GetStockPrice';

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
        <Stack.Screen name="SecondaryAnimation"component={SecondaryAnimation} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Comment" component={Comment} />
        <Stack.Screen name="ProgressBar" component={ProgressBar} />
        <Stack.Screen name="CounterScreenApp" component={CounterScreenApp} />
        <Stack.Screen name="GetStockPrice" component={GetStockPrice} />
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
