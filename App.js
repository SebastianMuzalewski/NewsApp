/*
Jonathan and Sebastian main code base, for news applciation.  


(https://newsapi.org/) - first api source. 

(https://rapidapi.com/mikilior1/api/FinancialTimes) - second api source.
*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';




export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
});
