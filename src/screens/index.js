import 'react-native-get-random-values'

import React, { useEffect, useRef } from 'react'
import { Text, View, StyleSheet, SafeAreaView, StatusBar, FlatList, ScrollView, Platform } from 'react-native'
import { useSelector } from 'react-redux'
import { SelectAccessToken, SelectRefreshToken, SelectLoggedInStatus } from '../reducer/reducer'

import { TextInput } from 'react-native-paper'
import Events from '../components/events'
import { GOOGLE_API_KEY } from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tailwind from 'twrnc'
import { Modal } from 'react-native'
import Mapscreen from './mapscreen'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Modalize } from 'react-native-modalize';

import { useDispatch } from 'react-redux'
import { LocationAction } from '../reducer/reducer'
import { getItem } from '../../utils/asyncStorage'






function IndexView({ navigation }) {

  let u_data = useSelector(async (state) => await state.authreducer)
  const stored_data = u_data
  console.log('STORED_DATA', stored_data)
  const tw = tailwind
  // console.log(GOOGLE_API_KEY)
  const modalRef = useRef(null);
  const openModal = () => modalRef.current?.open();
  const auth_access_token = getItem('auth_access_token')
  const auth_refresh_token = getItem('auth_refresh_token')

  console.log('ACCESS TOKEN ', auth_access_token)



  useEffect(() => {
    console.log('STORED_DATA', stored_data)
    openModal()
  }, [])

  const dispatch = useDispatch()

  return (


    <SafeAreaView style={styles.container}>
      <View style={tw`bg-[#1D1A38] flex-0.4  p-4 pt-7 `}>

        <GooglePlacesAutocomplete
          placeholder='Select Pickup point?'
          // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
          // currentLocationLabel="Current location"
          nearbyPlacesAPI='GooglePlacesSearch'
          listViewDisplayed={true}
          fetchDetails={true}

          styles={{
            textInput: { fontSize: 15, height: '100%' },
            container: { flex: 1.5 },
            textInputContainer: { marginTop: 15, height: 60, zIndex: 10000 }
          }}
          minLength={1}
          debounce={100}
          query={{
            key: GOOGLE_API_KEY,
            language: 'en',

          }}

          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            // console.log('DATA',data);
            // console.log('DETAILS',details);

            dispatch(LocationAction.setOrigin({
              'origin': details.geometry.location,
              'origin_desc': data.description
            }))
            dispatch(LocationAction.setDestination({ 'destination': null, 'destination_desc': null }))

          }}
          enablePoweredByContainer={false}




        />





      </View>


      <Events />

      {/* <Modalize
      modalHeight={1000}
      >
        <Mapscreen/>
      </Modalize> */}

    </SafeAreaView>

  )
}
export default IndexView

styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? '0' : '0',
    justifyContent: 'center',


  },
  sub_container: {
    flex: 0.8,
  }
})

