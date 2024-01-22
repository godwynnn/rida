import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import Navigation from './src/navigation';
// import { Provider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
// import AppWrapper from '.';
import Index from './src';


export default function App() {
  return (

    <Provider store={store}>
      <Index/>
    </Provider>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
