import 'react-native-get-random-values'

import React, { useEffect, useRef, useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView, StatusBar, FlatList, ScrollView, Platform, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { SelectAccessToken, SelectRefreshToken, SelectLoggedInStatus } from '../reducer/reducer'

import { TextInput, Modal, Portal } from 'react-native-paper'
import EventsDriveStack from '../components/events'
import Today from '../components/eventsComponents/today'
import { GOOGLE_API_KEY } from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tailwind from 'twrnc'
import { KeyboardAvoidingView } from 'react-native'
import Mapscreen from './mapscreen'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Modalize } from 'react-native-modalize';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch } from 'react-redux'
import { LocationAction } from '../reducer/reducer'
import { getItem } from '../../utils/asyncStorage'
import Svg, { Path } from 'react-native-svg';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { ImageBackground } from 'react-native'
import * as Location from 'expo-location';
import axios from 'axios'
import { Button } from 'react-native-paper'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../components/profile'
import Notification from '../components/notification'
import Activity from '../components/activity'
import { selectTripData } from '../reducer/reducer'


const BottomTab = createBottomTabNavigator();


export const TabIndexView = ({ navigation }) => {

  const tw = tailwind
  const dispatch = useDispatch()
  const LocationData = useSelector(selectTripData)

  return (
    <BottomTab.Navigator screenOptions={
      ({ route, navigation }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Activity') {
            iconName = focused ? 'list-circle' : 'list-circle-outline'
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications-circle' : 'notifications-circle-outline'
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline'
          }

          else if (route.name === 'Locate') {
            return (<TouchableOpacity
              onPress={() => dispatch(LocationAction.setTracker({...LocationData, showTrackerModal: true }))}

              style={{
                position: 'absolute',
                bottom: 20,
                backgroundColor: '#191C25',
                width: 70,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 70,
                elevation: 0,
                borderWidth: 1,
                borderBottomWidth: 0,
                borderRadius: 50,
                // borderBottomRightRadius:20,
                // borderBottomLeftRadius:20,
                borderColor: 'whitesmoke'


              }}>
              {focused ?
                <Ionicons name='locate' color={'white'} size={25} /> :
                <Ionicons name='locate-outline' color={'white'} size={25} />
              }

            </TouchableOpacity>)

          }
          return <Ionicons name={iconName} color={'#191C25'} size={size} />
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white', height: 60,
          marginVertical: 5, marginHorizontal: 10, borderRadius: 10
        },

        tabBarShowLabel: false,



      })
    }


    >
      <BottomTab.Screen name="Home" component={IndexView} />
      <BottomTab.Screen name="Activity" component={Activity} />
      <BottomTab.Screen name="Locate"
        listeners={() => ({
          tabPress: (e) => {
            console.log(e)
            dispatch(LocationAction.setTracker({...LocationData, 'showTrackerModal': true }))

          }
        })}
         >
          {() => null}
        </BottomTab.Screen>
      <BottomTab.Screen name="Notification" component={Notification} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  )
}





function IndexView({ navigation }) {


  const [errorMsg, setErrorMsg] = useState(null);
  let u_data = useSelector(async (state) => await state.authreducer)
  const { width, height } = Dimensions.get('screen')
  const stored_data = u_data
  console.log('STORED_DATA', stored_data)
  const tw = tailwind
  // console.log(GOOGLE_API_KEY)
  const modalRef = useRef(null);
  const PickUpRef = useRef(null)
  const openModal = () => modalRef.current?.open();
  const auth_access_token = getItem('auth_access_token')
  const auth_refresh_token = getItem('auth_refresh_token')
  const LocationData = useSelector(selectTripData)

  console.log('ACCESS TOKEN ', auth_access_token)



  useEffect(() => {
    console.log('STORED_DATA', stored_data)
    openModal()
  }, [])

  const dispatch = useDispatch()




  // // CURRENT LOCATION
  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords
      // console.log('Inside index',latitude)



      try {

        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`)
          .then(res => res.json()).then((data) => {

            console.log(data['results'][0].formatted_address)

            const address = data['results'][0].formatted_address;

            // console.log( address );
            dispatch(LocationAction.setOrigin({
              'origin': { 'lat': latitude, 'lng': longitude },
              'origin_desc': address
            }))
            dispatch(LocationAction.setDestination({ 'destination': null, 'destination_desc': null }))

            setTimeout(() => {
              PickUpRef.current?.setAddressText(address)
            }, 500); // Slight delay ensures component is mounted

          })

      } catch (error) {
        console.warn(error.message);
      }
    })();
  }, []);



  // LOCATION TRACKER
  const watchId = Location.watchPositionAsync(
    (position) => {
      // setLocation(position.coords);
      console.log(position.coords)
    },
    (error) => console.error(error),
    { enableHighAccuracy: true, distanceFilter: 10 }
  );

  // Clear listener when component unmounts
  useEffect(() => {
    // return () => Geolocation.clearWatch(watchId);
    Location.getCurrentPositionAsync(
      (position) => {
        console.log(position);
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);


  const hideModal = () => dispatch(LocationAction.setTracker({...LocationData, showTrackerModal: false }));
  console.log('tracker',LocationData.enableTracker)
  return (


    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} translucent backgroundColor="transparent" />

      <Portal >
        <Modal visible={LocationData.showTrackerModal} onDismiss={hideModal}
          style={[tw`flex flex-col justify-center items-center bg-white h-[50] w-[50] mt-[${height / 3}] ml-[${width / 4.5}]`, { borderRadius: 20, elevation: 10 }]}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign:'center' }}>Tracker</Text>
          {
           
           (LocationData.enableTracker == true ?
              <TouchableOpacity style={{ backgroundColor: '#191C25', padding:10, paddingHorizontal:20, borderRadius:10 }}
              onPress={()=>dispatch(LocationAction.setTracker({enableTracker:false}))}
              >
                <Text style={{ textAlign: 'center', color:'white' }}>Disable</Text>

              </TouchableOpacity>

              :
              <TouchableOpacity  style={{ backgroundColor: '#191C25',  padding:10, paddingHorizontal:20, borderRadius:10  }}
              
              onPress={()=>dispatch(LocationAction.setTracker({enableTracker:true}))}
              >
                <Text style={{ textAlign: 'center',color:'white'  }}>Enable</Text>

              </TouchableOpacity>)
          }
        </Modal>
      </Portal>

      <View style={[tw` flex-0.06 p-1 pt-5 `, { zIndex: 10, backgroundColor: 'transparent' }]}>



      </View>


      <View style={[tw`flex-1 `, { backgroundColor: 'transparent' }]}>
        <EventsDriveStack PickUpRef={PickUpRef} />
      </View>





    </SafeAreaView>

  )
}
export default IndexView

styles = StyleSheet.create({
  container: {
    backgroundColor: '#191C25',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? '0' : '0',
    // justifyContent: 'space-between',


  },

})

