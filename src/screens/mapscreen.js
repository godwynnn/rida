import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import { selectTripData } from '../reducer/reducer'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_API_KEY } from '@env'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet, {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider, BottomSheetBackdrop
} from '@gorhom/bottom-sheet';
import tailwind, { style } from 'twrnc'

import { Text, View, StyleSheet, SafeAreaView, StatusBar, FlatList, ScrollView, Platform } from 'react-native'

import { SelectAccessToken, SelectRefreshToken, SelectLoggedInStatus } from '../reducer/reducer'

import { LocationAction } from '../reducer/reducer'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



import { useDispatch } from 'react-redux'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Destination from '../components/destination';
import BookRide from '../components/bookRide'
import { Url } from '../urls'
import { Button } from 'react-native-paper'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'






const urls=Url()


export function SubStackGroup(){
  const stack = createNativeStackNavigator()
  return (
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
  )
}












function Mapscreen({navigation}) {


  const LocationData = useSelector(selectTripData)
  const mapRef = useRef(null)
  const snapPoints = useMemo(() => ['20%', '40%', '60%'], [])
  const tw = tailwind
  const bottomRef = useRef(null)
  const dispatch = useDispatch()


  const snapToIndex = (index) => bottomRef.current?.snapToIndex(index)

  useEffect(() => {

  }, [])

  const backdrop = useCallback((props) => <BottomSheetBackdrop
    {...props}
    appearsOnIndex={1}
    disappearsOnIndex={0}
    onPress={() => snapToIndex(0)}

  />, [])


  // console.log('location', LocationData)

  useEffect(() => {

    if (!LocationData.origin || !LocationData.destination || !mapRef.current) return


    setTimeout(() => {

      mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        animated: true,
      });


    }, 1500);




  }, [LocationData.origin, LocationData.destination, mapRef])







  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);




  return (

    <SafeAreaView style={styles.container}>


      
     

      <Button icon={"home"} onPress={() => navigation.navigate('index')}  labelStyle={{ fontSize: 30,alignSelf:'center' }}
      contentStyle={{justifyContent:'space-around', flexDirection:'row', padding:10}}
      style={[tw`bg-[#ECEEE9] w-[8%] h-[60px] rounded-[50px] absolute z-1000 top-[5%] left-3 flex`]}  />

      <MapView
        ref={mapRef}
        style={styles.map}
        mapType='mutedStandard'
        initialRegion={{
          latitude: LocationData.origin.origin.lat,
          longitude: LocationData.origin.origin.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      // onMapReady={fitMapToScreen}



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
            rotation={10.0}
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
            onStart={() => {
              dispatch(LocationAction.setTravelTimeData({ ...LocationData, 'ready': false }))


            }}
            onReady={result => {
              dispatch(LocationAction.setTravelTimeData({ ...LocationData, 'time': result.duration.toFixed(0).toString(), 'ready': true }))

              console.log(result.distance.toFixed(1))
              console.log(result.duration.toFixed(0).toString())

              console.log('ready')
            }}

          />


        )}


      </MapView>

      <BottomSheet snapPoints={snapPoints} index={2}
        backdropComponent={backdrop}
        ref={bottomRef}
        onClose={() => snapToIndex(0)}
        enableDynamicSizing={false}
      // onChange={handleSheetChanges}
      >
          <SubStackGroup />

       
      </BottomSheet>








    </SafeAreaView>


  )
}
export default Mapscreen

const styles = StyleSheet.create({
  container: {

    flex: 1,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : '0',
    paddingTop: Platform.OS === 'android' ? '0' : '0',
    // justifyContent: 'center',


  },
  map: {
    width: '100%',
    height: '100%',

  },

  Modalcontainer: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },

  // ModalcontentContainer: {
  // 	flex: 1,
  // 	alignItems: "center",
  // },
})
