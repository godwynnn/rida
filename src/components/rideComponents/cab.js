import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { FlatList } from 'react-native'
import tailwind from 'twrnc'




const ride_data = [
    {
        title: 'Economy',
        image: require('../../../assets/ride.png'),
        amount: '1000',
        id: 1
    },

    {
        title: 'Standard',
        image: require('../../../assets/ride.png'),
        amount: '1000',
        id: 2
    },

    {
        title: 'Premium',
        image: require('../../../assets/ride.png'),
        amount: '1000',
        id: 3
    },

    {
        title: 'Premium',
        image: require('../../../assets/ride.png'),
        amount: '1000',
        id: 4
    },


    {
        title: 'Premium',
        image: require('../../../assets/ride.png'),
        amount: '1000',
        id: 5
    },

    {
        title: 'Premium',
        image: require('../../../assets/ride.png'),
        amount: '1000',
        id: 6
    }

    ,

    {
        title: 'Premium',
        image: require('../../../assets/ride.png'),
        amount: '1000',
        id: 7
    }

    ,

    {
        title: 'Premium',
        image: require('../../../assets/ride.png'),
        amount: '1000',
        id: 8
    }
]


function Cab() {
    const tw = tailwind
    return (
        <SafeAreaView style={tw`flex flex-column pt-5 w-[100%] h-[100%]`}>

            <Text  style={{ color: 'black',fontSize:20, textAlign:'center', fontWeight:'500' }}>Pick A Ride</Text>

            <FlatList
                data={ride_data}
                keyExtractor={(item, index) => item.id}
                contentContainerStyle={[tw`p-6`]}

                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={[tw`flex flex-row`,{justifyContent:'space-between', alignItems:'center'}]}>
                            <Image source={item.image} style={[tw`w-[80px] h-[80px]`, { resizeMode: 'contain' }]} />


                            <View >
                            <Text style={{ color: 'black', fontSize:18, fontWeight:'400' }}>{item.title}</Text>
                            <Text style={{ color: 'black', fontSize:10, fontWeight:'400' }}>time</Text>
                            </View>

                            <Text style={{ color: 'black',fontSize:20,fontWeight:'300' }}>N{item.amount}</Text>


                               
                            

                        </TouchableOpacity>
                    )

                }}



            />


         </SafeAreaView>
    )
}

export default Cab