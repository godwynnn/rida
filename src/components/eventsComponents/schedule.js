import React, { useState, useEffect } from 'react'
import { View, SafeAreaView, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import tailwind from 'twrnc'
// import { Image } from 'react-native'
import img1 from '../../../assets/ft1.png'

import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import RNPickerSelect from "react-native-picker-select";

const { width, height } = Dimensions.get('window')
const feature_data = [
  {
    title: 'Ride',
    image: require('../../../assets/ft1.png'),
    id: 0
  },
  // {
  //   title: 'resturant',
  //   image: require('../../../assets/ft2.png'),
  //   id:1
  // },

  {
    title: 'Delivery',
    image: require('../../../assets/ft3.png'),
    id: 2
  },

]


const intervals = [
  { label: 'minutes', value: 'm' },
  { label: 'days', value: 'd' },
  { label: 'weeks', value: 'w' },
]

export default function Events() {

  const [selectedItems, setSelectedItems] = useState([]);
  const tw = tailwind
  return (
    <SafeAreaView style={[styles.container, { display: 'flex'}]}>

      <View style={[{ flex: 1 }, tw`pl-10 pr-10 pt-4 flex gap-2`]}>

      


      <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          style={{ fontSize: 5,width:'100%', height:10}}
          items={intervals}
          
          // key={({item})=>item.id}
        />


<TextInput
          style={tw`w-[100%] h-10`}
          placeholder='Enter Duration'
        />
        


        


      </View>


      <FlatList
        data={feature_data}
        contentContainerStyle={[styles.container,tw`flex-row`]}



        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity  >
              <View style={{
                width: 130, height: 130, backgroundColor: 'whitesmoke', margin: 4,
                justifyContent: 'center', alignItems: 'center'
              }} >

                <Image source={item.image} style={{ width: 50, height: 50 }} />
                <Text style={{ fontSize: 15, marginTop: 10 }}>{item.title}</Text>


              </View>




            </TouchableOpacity>)
        }}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'white',
    flex: 1,
    width: width,
    height: width * 0.9,
    paddingTop: '5%',
    justifyContent: 'center',
    // flexWrap: 'wrap',
    alignContent: 'flex-start',
    // flexDirection: 'row'

  },
  image: {
    width: '20%',
    height: '20%'
  }
})
