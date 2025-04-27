import React from 'react'
import { Text,SafeAreaView,View,StyleSheet, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Drive from './eventsComponents/today';
import NextTomorrow from './eventsComponents/next-tomorrow';
import Others from './eventsComponents/others';
import Events from './eventsComponents/schedule';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createMaterialTopTabNavigator();
const stack = createNativeStackNavigator()


// Custom Tab Bar to mimic the toggle style
function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View
    
    
    style={{
      flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,1)',
      borderRadius: 10,
      marginHorizontal: 100,
      marginBottom: 10,
      overflow: 'hidden',


    }}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={{
              flex: 1,
              paddingVertical: 8,
              backgroundColor: isFocused ? 'white' : 'transparent',
              alignItems: 'center',
              borderRadius: 10,
            }}

          >
            <Text style={{ color: isFocused ? '#000' : '#666', fontWeight: '600' }}>
              {descriptors[route.key].options.title || route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}




export default function EventsDriveStack(props) {
  
  return (
    <Tab.Navigator initialRouteName='Today'
  
    tabBar={(props) => <CustomTabBar {...props}/>}
    screenOptions={{ swipeEnabled: true,
       tabBarStyle:{
        elevation:0,
        backgroundColor: 'rgba(0,0,0,0)',
        shadowColor:'transparent',
        borderTopRightRadius:20
       },
       
       
       
       
      }}
    
    >
        <Tab.Screen name='Drive' component={Drive} initialParams={{PickUpRef:props.PickUpRef}} />
        <Tab.Screen name='Events' component={Events} />
        {/* <Tab.Screen name='22nd' component={NextTomorrow} /> */}
        {/* <Tab.Screen name='Others' component={Others} /> */}
    </Tab.Navigator>
  )
}
