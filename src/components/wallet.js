import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import tailwind from 'twrnc'

function Wallet() {
      const tw = tailwind
      const { width } = Dimensions.get('screen')
      return (
            <SafeAreaView style={{ height: '100%', backgroundColor: '#1D1A38', position: 'relative', borderTopLeftRadius: 30, paddingTop: 0, borderTopRightRadius: 30 }}>

                  <View style={[{ height: '40%' }, tw`bg-[transparent]  px-5 pt-2 `]}>

                  
                        <View style={
                              [tw`  w-[100%] h-[70%] top-15 left-0 bg-[#191C25]`,
                                    {borderRadius:20,elevation:10}
                              ]}>

                        </View>


                  </View>
                  <ScrollView style={[{
                        height: '60%', width: width, borderTopRightRadius: 20,
                        backgroundColor: 'white', borderTopLeftRadius: 20
                  }, tw`px-5 pt-4 bg-white `]}>







                  </ScrollView>




            </SafeAreaView>
      )
}

export default Wallet