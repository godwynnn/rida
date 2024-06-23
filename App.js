import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import Navigation from './src/navigation';
// import { Provider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
// import AppWrapper from '.';
import Index from './src';
import { registerRootComponent } from 'expo';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { style } from 'twrnc';


export default function App() {
  return (



    <GestureHandlerRootView style={{flex:1}}>
      <Provider store={store}>

        <Index />




      </Provider>
      </GestureHandlerRootView>
   

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

registerRootComponent(App)