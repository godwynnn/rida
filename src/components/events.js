import React from 'react'
import { Text,SafeAreaView,View,StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Today from './eventsComponents/today';
import Tomorrow from './eventsComponents/tomorrow';
import NextTomorrow from './eventsComponents/next-tomorrow';
import Others from './eventsComponents/others';


const Tab = createMaterialTopTabNavigator();

export default function Events() {
  return (
    <Tab.Navigator initialRouteName='Today' 
    
    screenOptions={{
        tabBarLabelStyle:{fontSize:6},
        tabBarStyle:{borderBottomWidth:0,elevation:0, backgroundColor:0},
        tabBarActiveTintColor:"gray"
    }}>
        <Tab.Screen name={'Today'} component={Today} />
        <Tab.Screen name='Tomorrow' component={Tomorrow} />
        <Tab.Screen name='22nd' component={NextTomorrow} />
        <Tab.Screen name='Others' component={Others} />
    </Tab.Navigator>
  )
}
