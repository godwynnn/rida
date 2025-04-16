import 'react-native-get-random-values'

import React, { useEffect, useRef } from 'react'
import { Text, View, StyleSheet, SafeAreaView, StatusBar, FlatList, ScrollView, Platform,TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { SelectAccessToken, SelectRefreshToken, SelectLoggedInStatus } from '../reducer/reducer'

import { TextInput } from 'react-native-paper'
import Events from '../components/events'
import { GOOGLE_API_KEY } from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tailwind from 'twrnc'
import { Modal,KeyboardAvoidingView } from 'react-native'
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





function IndexView({ navigation }) {

  let u_data = useSelector(async (state) => await state.authreducer)
  const {width,height}=Dimensions.get('screen')
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


      <View style={[tw`bg-[#1D1A38] flex-0.2 p-4 pt-5 `, { zIndex: 10 }]}>

        <GooglePlacesAutocomplete
          placeholder='Select Pickup point?'
          // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
          // currentLocationLabel="Current location"
          nearbyPlacesAPI='GooglePlacesSearch'
          listViewDisplayed={true}
          fetchDetails={true}

          styles={{
            textInput: { fontSize: 15, height: '100%' },
            container: { flex: 1,elevation:10,position:'absolute',
              top:2,left:0,width:width,zIndex: 9999,paddingHorizontal:10 },
            textInputContainer: { marginTop: 60, height: 60,opacity:0.9, borderRadius:50, borderWidth:0},
            listView:{  zIndex: 9999,elevation: 10, }
            
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
        {/* <Svg
         height="70%"
         width={width}
         viewBox="0 0 1440 320"
         style={{ position: 'absolute', top: '70%', left:'0' }}
        >
          <Path
          fill={'#fff'}
          d="M0,192L80,192C160,192,320,192,480,208C640,224,800,256,960,261.3C1120,267,1280,245,1360,234.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          
          />
        </Svg> */}


      </View>

      <View style={[tw`flex-0.8`,{zIndex:-1}]}>
        <Events />
      </View>
      

     
     

    </SafeAreaView>

  )
}
export default IndexView

styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? '0' : '0',
    // justifyContent: 'space-between',


  },
  sub_container: {
    flex: 0.8,
  }
})

