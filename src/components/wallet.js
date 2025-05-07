import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import tailwind from 'twrnc'
import Animated, { useSharedValue } from 'react-native-reanimated';
import Walletcard from './WalletComponents/card';
import { CardNavigatorGroup } from './WalletComponents/card';
import { useNavigation } from '@react-navigation/native';

function Wallet({ navigation }) {
      const tw = tailwind
      const { width } = Dimensions.get('screen')

      const firstPriority = useSharedValue(1)
      const secondPriority = useSharedValue(0.9)
      const switchCard = (priority) => {

            if ( priority == 0.9){
                  navigation.navigate('NairaAccount')
            }else{
                  navigation.navigate('DollarAccount')
            }
            

      }
      const dollarCard={
            'title':'Dollar',
            'currency':'$',
            'amount':'1500',
            'cardLogo':'https://res.cloudinary.com/dtt4nxboi/image/upload/v1746639101/download-removebg-preview_sg3lcn.png',
            'Logo':'https://res.cloudinary.com/dtt4nxboi/image/upload/v1746641508/white-removebg-preview_chqvmv.png',
             
      }

      const NairaCard={
            'title':'Naira',
            'currency':'N',
            'amount':'100000',
            'cardLogo':'',
            'Logo':'https://res.cloudinary.com/dtt4nxboi/image/upload/v1746640047/1-removebg-preview_1_jmkie4.png'

      }



      return (
            <SafeAreaView style={{ height: '100%', width: width, backgroundColor: '#1D1A38', paddingTop: 0, position: 'relative' }}>

                  <View style={[{ height: '40%' }, tw`bg-[transparent] px-5 relative  pt-2`]}>
                        <Walletcard
                              priority={secondPriority}
                              firstPriority={firstPriority}
                              secondPriority={secondPriority}
                              bgColor='whitesmoke'
                              textColor='#191C25'
                              card={NairaCard}
                              switchCard={switchCard}
                              navigation={navigation}
                        />


                        <Walletcard
                              priority={firstPriority}
                              firstPriority={firstPriority}
                              secondPriority={secondPriority}
                              bgColor='#191C25'
                              textColor='white'
                              switchCard={switchCard}
                              navigation={navigation}
                              card={dollarCard}
                        />




                  </View>

                  <SafeAreaView style={[{
                        height: '60%', width: width, borderTopRightRadius: 20,
                        backgroundColor: 'white', borderTopLeftRadius: 20
                  }, tw`px-5 pt-4`]}>




                        <CardNavigatorGroup />


                  </SafeAreaView>




            </SafeAreaView>
      )
}

export default Wallet