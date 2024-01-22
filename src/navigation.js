import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React,{useContext,useRef,useEffect,useState} from "react";
import { Text,View } from "react-native";
import {OnboardingView} from "./components/onboarding"
import {Authentication} from "./components/auth"
import { LoginView } from "./components/login";
import { SignupView } from "./components/signup";
import { getItem } from "../utils/asyncStorage";
import IndexView from "./components";



function Navigation(){
    const stack=createNativeStackNavigator()


    
    
    const [ShowOnboarded,setShowOnboarded]=useState(null);

    

    async function checkIfUserOnboarded(){
        const onboarded=await getItem('onboarded');


        
        if (onboarded==1){
            setShowOnboarded(false);
        }else{
            setShowOnboarded(true);
        }
    }

    useEffect(()=>{
        checkIfUserOnboarded();
    },[])

    if (ShowOnboarded==null){
        return null
    }


    
    if(ShowOnboarded){
        return(
        <stack.Navigator screenOptions={{headerShown:false}} initialRouteName="onboarding">
                <stack.Screen component={OnboardingView} name="onboarding"/>
                <stack.Screen component={Authentication} name="auth"/>

        </stack.Navigator>
        )
    }else{
        return(
            <stack.Navigator screenOptions={{headerShown:false}} initialRouteName="auth">
                    {/* <stack.Screen component={OnboardingView} name="onboarding"/> */}
                    <stack.Screen component={Authentication} name="auth"/>
                    <stack.Screen component={LoginView} name="login"/>
                    <stack.Screen component={SignupView} name="signup"/>
    
            </stack.Navigator>
            )
    }
}


export default Navigation