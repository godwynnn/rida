
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import  Navigation from './navigation';
import { MyDrawer } from './navigation';

function Index() {
  return (

    
    <NavigationContainer>
     
      <Navigation/>
    
    </NavigationContainer>
   
  )
}

export default  Index

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
