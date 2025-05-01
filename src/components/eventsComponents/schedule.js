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
    <SafeAreaView style={{ height: '100%', backgroundColor: 'white', borderTopLeftRadius: 30, paddingTop: 0, borderTopRightRadius: 30 }}>

      <View style={[{ flex: 1 }, tw`pl-10 pr-10 pt-4 flex gap-2 flex flex-col justify-center items-center`]}>


            <Text style={tw``}>Events</Text>
        


        


      </View>


      

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
