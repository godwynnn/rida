import React, { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { FlatList } from 'react-native'
import tailwind from 'twrnc'
// import { ScrollView } from 'react-native-gesture-handler'
// import { FlatList } from 'react-native-gesture-handler'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { useSelector } from 'react-redux'
import { LocationReducer } from '../../reducer/reducer'
import { selectTripData } from '../../reducer/reducer'
// import LoadingScreen from '../LoadingScreen'




// const ride_data = [
//     {
//         title: 'Economy',
//         image: require('../../../assets/ride.png'),
//         amount: '1000',
//         id: 1
//     },

//     {
//         title: 'Standard',
//         image: require('../../../assets/ride.png'),
//         amount: '1000',
//         id: 2
//     },

//     {
//         title: 'Premium',
//         image: require('../../../assets/ride.png'),
//         amount: '1000',
//         id: 3
//     },



// ]


function Cab({route}) {
    const tw = tailwind
    const [selected, setSelected] = useState({
        title: 'Economy'
    })

    const [Time, setTime] = useState('')

    const LocationData = useSelector(selectTripData)
    // console.log(route.params.data.params)
    ride_data= route.params.data.params
  

    
    return (
        <SafeAreaView style={tw`flex  pt-5 w-[100%] h-[100%]`}>

            <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', fontWeight: '500' }}>Pick A Ride</Text>

            <FlatList
                data={ride_data}
                keyExtractor={(item, index) => index}
                contentContainerStyle={[tw`p-6 h-[100%]`]}
                // windowSize={7}
                // initialNumToRender={1}
                // maxToRenderPerBatch={2}

                renderItem={({ item }) => {
                    console.log(item)

                    return (
                        <TouchableOpacity onPress={() => setSelected(item)} style={[tw`flex flex-row`, { justifyContent: 'space-between', alignItems: 'center' }]}>
                            <Image source={require('../../../assets/ride.png')} style={[tw`w-[80px] h-[80px]`, { resizeMode: 'contain' }]} />


                            <View>
                                <Text style={{ color: 'black', fontSize: 18, fontWeight: '400' }}>{item.title}</Text>

                                {!LocationData.map_ready  ?
                                    <Text style={{ color: 'black', fontSize: 10, fontWeight: '400' }}>0 min</Text>
                                    :
                                    <Text style={{ color: 'black', fontSize: 10, fontWeight: '400' }}>{item.time}</Text>

                                }
                                



                            </View>

                            <Text style={{ color: 'black', fontSize: 15, fontWeight: '600' }}>N{item.amount}</Text>





                        </TouchableOpacity>
                    )

                }}



            />



            <View style={[tw`w-[100%] h-[18%] p-2 items-center`, {}]}>
                <TouchableOpacity disabled={!selected} style={[tw`w-[70%] h-[100%] justify-center rounded-[30px] bg-green-900`,]}>
                    <Text style={[tw`text-white text-center`, { fontSize: 20, fontWeight: 600 }]}>Book {selected.title}</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

export default Cab