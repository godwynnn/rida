import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext, useRef, useEffect, useState } from "react";
import { Text, View,KeyboardAvoidingView, Platform } from "react-native";
import { OnboardingView } from "./screens/onboarding"
import { Authentication } from "./screens/auth"
import { LoginView } from "./screens/login";
import { SignupView } from "./screens/signup";
import { getItem } from "../utils/asyncStorage";
import IndexView from "./screens";
import Mapscreen from "./screens/mapscreen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Destination from "./components/destination";






function Navigation() {
    const stack = createNativeStackNavigator()




    const [ShowOnboarded, setShowOnboarded] = useState(null);
    const [is_loggedIn, setisLoggedIn] = useState(false)



    async function checkIfUserOnboarded() {
        const onboarded = await getItem('onboarded');



        if (onboarded == 1) {
            setShowOnboarded(false);
        } else {
            setShowOnboarded(true);
        }
    }


    const checkIfUserIs_loggedIn = async () => {
        const logged_in = await getItem('logged_in');

        if (logged_in == 1) {
            setisLoggedIn(true)
        } else {
            setisLoggedIn(false)
        }
    }


    // console.warn('LOGGED IN ', is_loggedIn)


    useEffect(() => {
        checkIfUserOnboarded();
        checkIfUserIs_loggedIn();
    }, [])

    if (ShowOnboarded == null) {
        return null
    }



    if (ShowOnboarded) {



        return (
            <KeyboardAvoidingView

                behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
                style={{ flex: 1 }}
            >
                <stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="onboarding">
                    <stack.Screen component={OnboardingView} name="onboarding" />
                    <stack.Screen component={Authentication} name="auth" />
                    <stack.Screen component={LoginView} name="login" />
                    <stack.Screen component={SignupView} name="signup" />
                    <stack.Screen component={IndexView} name="index" />
                    <stack.Screen component={Mapscreen} name="MapScreen" />

                </stack.Navigator>
            </KeyboardAvoidingView>
        )
    } else {
        if (!is_loggedIn) {
            return (

                <KeyboardAvoidingView

                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}

                >
                    <stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="auth">


                        <stack.Screen component={Authentication} name="auth" />
                        <stack.Screen component={LoginView} name="login" />
                        <stack.Screen component={SignupView} name="signup" />
                        <stack.Screen component={IndexView} name="index" />
                        <stack.Screen component={Mapscreen} name="MapScreen" />



                    </stack.Navigator>

                </KeyboardAvoidingView>
            )

        } else {
            return (

                <KeyboardAvoidingView

                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}

                >
                    <stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="index">



                        <stack.Screen component={IndexView} name="index" />
                        <stack.Screen component={Mapscreen} name="MapScreen" />

                    </stack.Navigator>

                </KeyboardAvoidingView>
            )

        }

    }

}


export default Navigation