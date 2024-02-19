import React,{useState,useEffect,useContext} from "react";
import { Text,View,FlatList,ScrollView,Image,StyleSheet,Dimensions,Platform, TouchableOpacity } from "react-native";
import img1 from '../../assets/img1.gif';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.gif';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.gif';
import img7 from '../../assets/img7.png';
import img8 from '../../assets/img8.png';
import Onboarding from 'react-native-onboarding-swiper';
import { useFonts } from "expo-font";
import { Zeyada_400Regular } from "@expo-google-fonts/zeyada";
import { Audiowide_400Regular } from "@expo-google-fonts/audiowide";
import AppLoading from "expo-app-loading";
import * as Font from 'expo-font';
import * as splashScreen from 'expo-splash-screen'
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../../utils/asyncStorage";



const {width, height} = Dimensions.get('window')
export const OnboardingView=()=>{

    const navigation=useNavigation()
    
    const onDoneBtn=({...props})=>{
       return( <TouchableOpacity {...props} style={styles.donebtn}>
            <Text style={styles.donebtntext}>Done</Text>
        </TouchableOpacity>
        )
    }
    const handleDone=()=>{
       navigation.navigate('auth')
       setItem('onboarded','1')
    }

    const pages=[
        {
            backgroundColor: '#11202E',
            // image: <Image source={require('../../assets/img6.png')} />,
            title: 'Ride with Us',
            image:(
            // <SafeAreaView style={styles.imgContainer} >
                <Image source={img5} style={styles.img} />
            // </SafeAreaView>
           
            
            ),
            
            subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
            backgroundColor: '#2E2C11',
            image: <Image source={img8}  style={styles.img}/>,
            title: 'Pick a location',
            subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
            backgroundColor: '#23112E',
            image: <Image source={img7} style={styles.img} />,
            
            title: 'Enjoy Your Ride',
            subtitle: 'Done with React Native Onboarding Swiper',
        }
        
    ]

    
 
        

        
        return(

            <Onboarding
            onSkip={handleDone}
            onDone={handleDone}
            // onDone={()=>navigation.navigate('auth')}
            pages={pages} 
            titleStyles={styles.title}
            // imageContainerStyles={styles.imgContainer}
            bottomBarHighlight={false}
            DoneButtonComponent={onDoneBtn}
            containerStyles={styles.container}
            />
        )
    
   
}
const styles=StyleSheet.create({
    title:{
        
        fontWeight:'bold',
        fontSize:25,
        // fontFamily:'audiowide',
        
    },
   
    imgContainer:{
        // width: width*0.9,
        // height:width*0.8,
        // display:'flex',
        justifyContent:"center",
        alignItems:'center',
       backgroundColor:'whitesmoke',
        
        

       
    },
    img:{
        width: width*0.9,
        height: width*0.8, 
        // borderRadius:20,
    },
    donebtn:{
        
        // width: width*0.2,
        // height:'20%',
        padding:20,
        borderBottomLeftRadius:25,
        backgroundColor:'white',
        borderTopLeftRadius:25,
        width:width*0.3,
    },
    donebtntext:{
        color:'grey',
        fontWeight:'bold',
    }
})