import 'react-native-get-random-values'

import React, { useEffect, useRef, useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView, StatusBar, FlatList, ScrollView, Platform, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { SelectAccessToken, SelectRefreshToken, SelectLoggedInStatus } from '../reducer/reducer'

import { TextInput } from 'react-native-paper'
import EventsDriveStack from '../components/events'
import Today from '../components/eventsComponents/today'
import { GOOGLE_API_KEY } from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tailwind from 'twrnc'
import { Modal, KeyboardAvoidingView } from 'react-native'
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
      // console.log(location)



      try {

        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`)
          .then(res => res.json()).then((data) => {


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




  return (


    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'}  translucent backgroundColor="transparent" />
      
      <View style={[tw` flex-0.06 p-1 pt-5 `, { zIndex: 10, backgroundColor:'transparent'}]}>
            
                    
            
            </View>


      <View style={[tw`flex-1 `, { zIndex: -1,backgroundColor:'transparent'  }]}>
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
  sub_container: {
    flex: 0.8,
  }
})

