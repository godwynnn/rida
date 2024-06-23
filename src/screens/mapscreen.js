import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import { selectTripData } from '../reducer/reducer'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_API_KEY } from '@env'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import tailwind from 'twrnc'


import { Text, View, StyleSheet, SafeAreaView, StatusBar, FlatList, ScrollView, Platform } from 'react-native'

import { SelectAccessToken, SelectRefreshToken, SelectLoggedInStatus } from '../reducer/reducer'

import { LocationAction } from '../reducer/reducer'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



import { useDispatch } from 'react-redux'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Destination from '../components/destination';
import BookRide from '../components/bookRide'







export default function Mapscreen() {


  const LocationData = useSelector(selectTripData)
  const mapRef = useRef(null)
  const snapPoints = useMemo(() => ['20%', '40%', '60%'], [])
  const tw = tailwind
  const bottomRef = useRef(null)
  const dispatch = useDispatch()
  const stack = createNativeStackNavigator()

  const snapToIndex = (index) => bottomRef.current?.snapToIndex(index)

  const backdrop = useCallback((props) => <BottomSheetBackdrop
    {...props}
    appearsOnIndex={1}
    disappearsOnIndex={0}
    onPress={() => snapToIndex(0)}



  />, [])


  console.log('location', LocationData)

  useEffect(() => {

    if (!LocationData.origin || !LocationData.destination) return

    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });

  }, [LocationData.origin, LocationData.destination])



  return (

    <SafeAreaView style={styles.container}>

      <MapView
        ref={mapRef}
        style={styles.map}
        mapType='mutedStandard'
        initialRegion={{
          latitude: LocationData.origin.origin.lat,
          longitude: LocationData.origin.origin.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}



      >

        {LocationData.origin.origin &&
          <Marker
            coordinate={{
              latitude: LocationData.origin.origin.lat,
              longitude: LocationData.origin.origin.lng,
            }}
            title='Pick-up'
            description={LocationData.origin.origin_desc}
            identifier='origin'
            rotation={10.0}
          />

        }


        {LocationData.destination.destination && (
          <Marker
            coordinate={{
              latitude: LocationData.destination.destination.lat,
              longitude: LocationData.destination.destination.lng,
            }}
            title='Destination'
            description={LocationData.destination.destination_desc}
            identifier='destination'
          />
        )


        }


        {LocationData.origin.origin && LocationData.destination.destination && (
          <MapViewDirections
            origin={LocationData.origin.origin_desc}
            destination={LocationData.destination.destination_desc}
            apikey={GOOGLE_API_KEY}
            strokeWidth={3}
            strokeColor="black"

          />


        )}



      </MapView>


      <BottomSheet snapPoints={snapPoints} index={1}
        backdropComponent={backdrop}
        ref={bottomRef}
        onClose={()=>snapToIndex(0)}
      >
        <stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="destination">

        <stack.Screen
            component={Destination}
            name='destination'

          />


        <stack.Screen
            component={BookRide}
            name='bookRide'

          />


          

          




        </stack.Navigator>



      </BottomSheet>


    </SafeAreaView>


  )
}
const styles = StyleSheet.create({
  container: {

    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : '0',
    // justifyContent: 'center',


  },
  map: {
    width: '100%',
    height: '100%',

  }
})
