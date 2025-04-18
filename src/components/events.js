import React from 'react'
import { Text,SafeAreaView,View,StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Today from './eventsComponents/today';
import NextTomorrow from './eventsComponents/next-tomorrow';
import Others from './eventsComponents/others';
import Schedule from './eventsComponents/schedule';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createMaterialTopTabNavigator();
const stack = createNativeStackNavigator()

export default function Events() {
  return (
    <stack.Navigator initialRouteName='Today'
    screenOptions={{headerShown:false}}  
    
    // screenOptions={{
    //   tabBarShowLabel:true,
    //     tabBarLabelStyle:{fontSize:8,color:'black'},
    //     tabBarStyle:{borderBottomWidth:0,elevation:0, backgroundColor:'white'},
    //     // tabBarActiveTintColor:"gray",
    //     tabBarIndicatorStyle:{
    //     backgroundColor:'gray',

    //     }
    // }}
    >
        <stack.Screen name='Today' component={Today}/>
        <stack.Screen name='Schedule' component={Schedule} />
        {/* <Tab.Screen name='22nd' component={NextTomorrow} /> */}
        {/* <Tab.Screen name='Others' component={Others} /> */}
    </stack.Navigator>
  )
}
