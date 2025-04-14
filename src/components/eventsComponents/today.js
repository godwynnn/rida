import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import tailwind from 'twrnc'
// import { Image } from 'react-native'
import img1 from '../../../assets/ft1.png'
import { useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

import { selectTripData } from '../../reducer/reducer'
// import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'

const { width, height } = Dimensions.get('window')
const feature_data = [
  {
    title: 'Ride',
    image: 'car',
    id: 0,
    next_screen: 'Mapscreen',
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

  {
    title: 'Activity',
    image: 'list',
    id: 3,
    service: 'ACTIVITY'
  },


]





export default function Today({ navigation }) {
  const tw = tailwind
  const LocationData = useSelector(selectTripData)


  const gotoMapScreen = (screen) => {
    navigation.navigate(screen)

  }


  const setService = (value) => {
    console.log('SERVICE', value.service)
    gotoMapScreen(value.next_screen)
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }} >

      <View style={{
        flex: 0.3
      }}>
        <FlatList
          data={feature_data}
          contentContainerStyle={styles.container}
          horizontal
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}

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

      <View style={[tw `p-0 px-4 flex-0.3`,{gap:10}]}>
      <Text style={tw `font-500 text-md`}> Favourite</Text>
        
        <TouchableOpacity style={[tw`bg-[whitesmoke] flex-0.5 px-5 flex-row`,{alignItems:'center', borderRadius:10, justifyContent:'space-between'}]}>
        
          
          <View style={[tw`flex-row`,{gap:20,justifyContent:'center',alignItems:'center'}]}>
          <Ionicons name='home' size={25} color={'#1D1A38'} /> 
            <View>
            <Text style={[tw`text-[16px]`,{fontWeight:'bold',}]}>Home</Text>
            <Text>Add a home address</Text>
            </View>
            
          </View>

          <View>
          <Ionicons name='arrow-forward' size={20} color={'#1D1A38'} /> 
          </View>
          
            
        </TouchableOpacity>

        <TouchableOpacity style={[tw`bg-[whitesmoke] flex-0.5 px-5 flex-row`,{alignItems:'center', borderRadius:10, justifyContent:'space-between'}]}>
        
          
          <View style={[tw`flex-row`,{gap:20,justifyContent:'center',alignItems:'center'}]}>
          <Ionicons name='home' size={25} color={'#1D1A38'} /> 
            <View>
            <Text style={[tw`text-[16px]`,{fontWeight:'bold',}]}>Home</Text>
            <Text>Add a home address</Text>
            </View>
            
          </View>

          <View>
          <Ionicons name='arrow-forward' size={20} color={'#1D1A38'} /> 
          </View>
          
            
        </TouchableOpacity>
      </View>



    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'white',
    // flex: 1,
    // width: width,
    height: width * 0.9,
    paddingTop: '8%',
    paddingHorizontal: 10,
    // justifyContent:'center',
    // alignItems:'center',
    // flexWrap:'wrap',
    alignContent: 'flex-start',
    // flexDirection:'row'

  },
  image: {
    width: '20%',
    height: '20%'
  }
})
