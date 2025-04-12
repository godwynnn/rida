import React from 'react'
import { Text, View } from 'react-native'
import tailwind from 'twrnc'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Cab from './rideComponents/cab'
import Bike from './rideComponents/bike'

const Tab =createMaterialTopTabNavigator()
function BookRide({route}) {


  console.log('BookRide ', route.params)

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
      <Tab.Screen component={Cab}  name='cab'  initialParams={{data :route.params}} />
      <Tab.Screen component={Bike}  name='bike' initialParams={{data :route.params}} />



    </Tab.Navigator>
    

  )
}

export default BookRide