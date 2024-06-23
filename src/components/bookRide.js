import React from 'react'
import { Text, View } from 'react-native'
import tailwind from 'twrnc'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Cab from './rideComponents/cab'
import Bike from './rideComponents/bike'

const Tab =createMaterialTopTabNavigator()
function BookRide() {


  const tw = tailwind
  return (
   
    <Tab.Navigator
    initialRouteName='cab'

    screenOptions={{
      tabBarLabelStyle:{fontSize:10},
      tabBarStyle:{borderBottomWidth:0,elevation:0, backgroundColor:'white'},
      // tabBarActiveTintColor:"gray",
      tabBarIndicatorStyle:{
      backgroundColor:'gray',

      }
  }}
    
    >
      <Tab.Screen component={Cab}  name='cab' />
      <Tab.Screen component={Bike}  name='bike' />



    </Tab.Navigator>
    

  )
}

export default BookRide