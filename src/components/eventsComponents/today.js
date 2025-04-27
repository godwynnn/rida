import React, { useEffect, useState, useRef } from 'react'
import {
  View, SafeAreaView, Text, FlatList, TouchableOpacity,
  Image, StyleSheet, Dimensions, ImageBackground,
  ScrollView
} from 'react-native'
import tailwind from 'twrnc'
// import { Image } from 'react-native'
import img1 from '../../../assets/ft1.png'
import { useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

import { selectTripData } from '../../reducer/reducer'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux'
import { LocationAction } from '../../reducer/reducer'
import { Button } from 'react-native-paper'
import { GOOGLE_API_KEY } from '@env'


// import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'

const { width, height } = Dimensions.get('window')
const feature_data = [
  {
    title: 'Ride',
    image: 'car',
    id: 0,
    next_screen: 'MapScreen',
    service: 'RIDE'
  },

  {
    title: 'Delivery',
    image: 'bag',
    id: 1,
    service: 'DELIVERY'
  },

  {
    title: 'Events',
    image: 'calendar',
    id: 2,
    service: 'EVENT'
  },


]

const favourite_data = [
  {
    icon: 'home',
    title: 'Home',
    info: 'Add a home address',
    id: 0,

  },

  {
    icon: 'briefcase',
    title: 'Work',
    info: 'Add a work address',
    id: 1
  }
]



export default function Drive({ route,navigation }) {
  const tw = tailwind
  const LocationData = useSelector(selectTripData)
  const dispatch = useDispatch()

  const gotoMapScreen = (screen) => {
    navigation.navigate(screen)

  }


  const setService = (value) => {

    console.log('SERVICE', value.service)
    gotoMapScreen(value.next_screen)
  }


  return (



    <View style={{ height: '100%', backgroundColor: 'white', borderTopLeftRadius: 30, paddingTop: 0, borderTopRightRadius: 30 }} >



      <View
        style={{
          height: '10%',


        }}
      >

        <GooglePlacesAutocomplete
          placeholder='Select Pickup point?'
          ref={route.params.PickUpRef}
          // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
          // currentLocationLabel="Current location"
          nearbyPlacesAPI='GooglePlacesSearch'
          listViewDisplayed={true}
          fetchDetails={true}


          renderRightButton={() => (
            <View style={{ borderBottomRightRadius: 5, borderTopRightRadius: 5, padding: 15, width: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
              <TouchableOpacity
                onPress={() => route.params.PickUpRef.current?.clear()}
                style={{ backgroundColor: '#DFDFDF', width: 20, padding: 2, borderRadius: 60 }}

              >


                <Text style={{
                  fontSize: 12,
                  fontWeight: 'bold', color: 'white', textAlign: 'center'
                }}>✕</Text>


              </TouchableOpacity>
            </View>
          )}

          renderLeftButton={() => (
            <View style={{ width: '10%', display: 'flex', justifyContent: "center", alignItems: 'center', }}>
              <View>
                <Button icon='map-marker' style={{ width: '100', }} />

              </View>

            </View>
          )}


          styles={{
            textInput: { fontSize: 15, height: '100%', borderRadius: 0, backgroundColor: '#ECEEE9' },
            container: {
              flex: 1, elevation: 10,
              top: 0, left: 0, width: width, zIndex: 9999, paddingHorizontal: 10, position: 'absolute'
            },
            textInputContainer: { marginTop: 10, height: 50, opacity: 0.9, borderRadius: 5, borderWidth: 0, backgroundColor: '#ECEEE9' },
            listView: { zIndex: 9999, elevation: 10, }

          }}
          minLength={1}
          debounce={100}
          query={{
            key: GOOGLE_API_KEY,
            language: 'en',

          }}

          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true

            dispatch(LocationAction.setOrigin({
              'origin': details.geometry.location,
              'origin_desc': data.description
            }))
            dispatch(LocationAction.setDestination({ 'destination': null, 'destination_desc': null }))

          }}
          enablePoweredByContainer={false}

        />

      </View>





<ScrollView nestedScrollEnabled={true}
style={{height:'90%'}}
showsVerticalScrollIndicator={false}
>


      {/* FEATURES */}

      <View style={{
        height: '25%',


      }}>
        <FlatList
          data={feature_data}
          contentContainerStyle={styles.container}
          horizontal
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          scrollEnabled={false}



          keyExtractor={(item, index) => item.id}

          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => setService(item)} disabled={!LocationData.origin}>
                <View style={[{
                  width: 100, height: 100, backgroundColor: 'whitesmoke', margin: 4,
                  justifyContent: 'center', alignItems: 'center', borderRadius: 20,
                }, tw`${!LocationData.origin && 'opacity-30'} `]}

                >

                  <Ionicons name={item.image} size={35} color={'#1D1A38'} />
                  <Text style={{ fontSize: 15, marginTop: 10 }}>{item.title}</Text>


                </View>





              </TouchableOpacity>)
          }}
        />
      </View>


      <View style={[tw`p-0 px-4 h-40`, { gap: 10 }]}>





        {/* FAVOURITE */}
        <Text style={tw`font-500 text-[15px]`}> Favourite</Text>

        <FlatList
          data={favourite_data}
          contentContainerStyle={{ gap: 10 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTap='handled'
          scrollEnabled={false}

          
          keyExtractor={(item, index) => item.id}

          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={[tw`bg-[whitesmoke]  px-5 flex-row h-15`, { alignItems: 'center', borderRadius: 10, justifyContent: 'space-between' }]}>


                <View style={[tw`flex-row`, { gap: 20, justifyContent: 'center', alignItems: 'center' }]}>
                  <Ionicons name={item.icon} size={25} color={'#1D1A38'} />
                  <View>
                    <Text style={[tw`text-[16px]`, { fontWeight: 'bold', }]}>{item.title}</Text>
                    <Text>{item.info}</Text>
                  </View>

                </View>

                <View>
                  <Ionicons name='arrow-forward' size={20} color={'#1D1A38'} />
                </View>


              </TouchableOpacity>
            )
          }}
        />



      </View>


      <View style={[tw` h-100 p-4 pt-0 `, {}]}>


        <View style={[tw`bg-[#191C25] h-[40%]  mt-10 `, { borderRadius: 20, position: 'relative' }]}>
          <Text style={tw`text-[#fff] font-700 text-xl mt-5 ml-2`}>Schedule Your Ride</Text>
          <Text style={tw`text-[#fff] font-400 text-[12px] mt-1 ml-2`}> Plan ahead, ride stress-free</Text>
          <Text style={tw`text-[#fff] font-400 text-[12px] mt-1 ml-2`}> Schedule your ride now!</Text>

          <TouchableOpacity style={[tw`bg-[whitesmoke] w-[30%] mt-2 ml-2  h-[25%] flex`, { alignItems: 'center', borderRadius: 10, justifyContent: 'center' }]}>


            <Text style={tw`text-[#1D1A38] font-500 text-[12px] text-center`}> Let's go!</Text>

          </TouchableOpacity>


          <Image source={require('../../../assets/ft1.png')}
            resizeMode="contain" style={{ width: '80%', height: '100%', position: 'absolute', right: -50 }} />




        </View>


      </View>

      </ScrollView>
    </View>


  )
}

const styles = StyleSheet.create({
  container: {


    bordertop: '50%',
    // flex: 1,
    // width: width,
    height: '100%',
    paddingTop: '8%',
    paddingHorizontal: 10,
    // flexGrow:1,
    // alignContent: 'flex-start',
    // flexDirection:'row'

  },
  image: {
    width: '20%',
    height: '20%'
  }
})
