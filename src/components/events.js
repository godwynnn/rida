import React from 'react'
import { Text,SafeAreaView,View,StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Today from './eventsComponents/today';
import NextTomorrow from './eventsComponents/next-tomorrow';
import Others from './eventsComponents/others';
import Schedule from './eventsComponents/schedule';


const Tab = createMaterialTopTabNavigator();

export default function Events() {
  return (
    <Tab.Navigator initialRouteName='Today' 
    
    screenOptions={{
        tabBarLabelStyle:{fontSize:8},
        tabBarStyle:{borderBottomWidth:0,elevation:0, backgroundColor:0},
        // tabBarActiveTintColor:"gray",
        tabBarIndicatorStyle:{
        backgroundColor:'gray',

        }
    }}>
        <Tab.Screen name={'Today'} component={Today} />
        <Tab.Screen name='Schedule' component={Schedule} />
        {/* <Tab.Screen name='22nd' component={NextTomorrow} /> */}
        {/* <Tab.Screen name='Others' component={Others} /> */}
    </Tab.Navigator>
  )
}
