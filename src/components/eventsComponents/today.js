import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions,ImageBackground } from 'react-native'
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

const favourite_data=[
  {
    icon:'home',
    title:'Home',
    info:'Add a home address'
  },

  {
    icon:'briefcase',
    title:'Work',
    info:'Add a work address'
  }
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

      <FlatList
          data={favourite_data}
          contentContainerStyle={{gap:10}}
          showsVerticalScrollIndicator={false}
          
          keyExtractor={(item, index) => item.id}

          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={[tw`bg-[whitesmoke]  px-5 flex-row h-15`,{alignItems:'center', borderRadius:10, justifyContent:'space-between'}]}>
        
          
                <View style={[tw`flex-row`,{gap:20,justifyContent:'center',alignItems:'center'}]}>
                <Ionicons name={item.icon} size={25} color={'#1D1A38'} /> 
                  <View>
                  <Text style={[tw`text-[16px]`,{fontWeight:'bold',}]}>{item.title}</Text>
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


<View style={[tw` flex-0.4 p-4 pt-0 `,{}]}>

        
        <View style={[tw`bg-[#1D1A38] flex-0.9  mt-10 `,{borderRadius:20,position:'relative'}]}>
          <Text style={tw`text-[#fff] font-700 text-xl mt-5 ml-2`}>Schedule Your Ride</Text>
          <Text style={tw`text-[#fff] font-400 text-[12px] mt-1 ml-2`}> Plan ahead, ride stress-free</Text>
          <Text style={tw`text-[#fff] font-400 text-[12px] mt-1 ml-2`}> Schedule your ride now!</Text>

          <TouchableOpacity style={[tw`bg-[whitesmoke] w-[30%] mt-2 ml-2  h-[25%] flex`,{alignItems:'center', borderRadius:10,justifyContent:'center' }]}>
        
          
          <Text style={tw`text-[#1D1A38] font-500 text-[12px] text-center`}> Let's go!</Text>
            
        </TouchableOpacity>


                <Image source={require('../../../assets/ft1.png')} 
                resizeMode="contain" style={{width:'80%',height:'100%',position:'absolute',right:-50}} />
                      
                


        </View>


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
