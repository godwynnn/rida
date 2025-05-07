import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import tailwind from 'twrnc'
import Animated, { Easing, interpolate, withTiming } from 'react-native-reanimated';
import { GestureDetector } from 'react-native-gesture-handler';
import { Gesture } from 'react-native-gesture-handler';
import { useAnimatedStyle,useSharedValue } from 'react-native-reanimated';

function Walletcard(props) {
    const tw = tailwind
    const { width,height } = Dimensions.get('window')
    const Ytranslate=useSharedValue(60)
    const rotation=useSharedValue(0)
    


    const gesture=Gesture.Pan()
    .onBegin(({translationY})=>{
        
        Ytranslate.value=20
        rotation.value=60
    }).onUpdate(({translationY})=>{
        
        Ytranslate.value=80
        rotation.value=30
    })
    .onEnd(()=>{
        
        const priorities=[
            props.firstPriority.value,
            props.secondPriority.value
        ]

        const lastPriority=priorities[priorities.length - 1]
        console.log(lastPriority)
        for (let i=priorities.length - 1; i>0;i--){
            priorities[i]=priorities[i-1]
        }
        priorities[0]=lastPriority
        props.firstPriority.value=priorities[0]
        props.secondPriority.value=priorities[1]


        Ytranslate.value=withTiming(60,{duration:500,easing:Easing.quad})
        // rotation.value=withTiming(30,{duration:1000,easing:Easing.linear},
        //     ()=>{
        //       rotation.value=30  
        //     }
        // )
    })


    const cardStyle=useAnimatedStyle(()=>{
        const getPosition=()=>{
            switch(props.priority.value){
                case 1:
                    return 70
                case 0.9:
                    return 90
                default:
                    return 50
            }
        }
        return{
            borderRadius: 20,
            elevation: 50 ,
            backgroundColor:props.bgColor,
            position:'absolute',
            left:"5%",
            zIndex:props.priority.value*100,
            bottom:withTiming(getPosition(),{duration:500}),
        
            transform:[{translateY:withTiming(Ytranslate.value,{duration:100})},
                {scale:withTiming(props.priority.value,{duration:500})}
                // {rotate:`${interpolate(rotation.value,[30,60],[0,-10])}rad` }
            ],
        }

    })
    return (
       

            <GestureDetector gesture={gesture}>
                <Animated.View style={
                    [tw`  w-[100%] h-[70%] `,
                    cardStyle,
                    ]}>

                </Animated.View >
            </GestureDetector>



    )
}

export default Walletcard