import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import tailwind from 'twrnc'
import Animated, { useSharedValue } from 'react-native-reanimated';
import Walletcard from './WalletComponents/card';

function Wallet() {
      const tw = tailwind
      const { width } = Dimensions.get('screen')

      const firstPriority = useSharedValue(1)
      const secondPriority = useSharedValue(0.9)
      return (
            <SafeAreaView style={{ height: '100%', width: width, backgroundColor: '#1D1A38', paddingTop: 0, position: 'relative' }}>

                  <View style={[{ height: '40%' }, tw`bg-[transparent] px-5 relative  pt-2`]}>
                        <Walletcard
                              priority={secondPriority}
                              firstPriority={firstPriority}
                              secondPriority={secondPriority}
                              bgColor='#191C25'
                        />
                        

                        <Walletcard
                              priority={firstPriority}
                              firstPriority={firstPriority}
                              secondPriority={secondPriority}
                              bgColor='whitesmoke'
                        />




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