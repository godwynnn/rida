import { createSlice } from "@reduxjs/toolkit";
import { secureGetItem } from "../../utils/secureStorage";
import { getItem } from "../../utils/asyncStorage";




let State={
    refresh_token:'',
    access_token:'',
    status:false

}

// const AuthenticationReducer=(state,action)=>{
//     switch (action.type) {
//         case 'LOGIN':
//             console.log('logged in')
//             break;
//         case 'LOGOUT':
//             console.log('logged out')
//             break;
//         default:
//             console.log(state);
//     }
// }


export const AuthenticationSlice=createSlice({
    name:'auth',
    initialState:State,
    // middleware: getDefaultMiddleware =>
    // getDefaultMiddleware({
    //   serializableCheck: false,
    // }),
    reducers:{
        Login:async (state,action)=>{
            
           const auth_access_token=await getItem('auth_access_token')
           const auth_refresh_token=await getItem('auth_refresh_token')
        //    const data=JSON.parse(auth_data)
        //    console.log('AUTH DATA :',auth_access_token)
        //    console.log('AUTH DATA :',data.token.access)

            state.refresh_token=auth_refresh_token
            state.access_token=auth_access_token
            state.status=true
            console.log('STATE', state)
           
        
        },

        Logout:(state,action)=>{
            console.log('logged out')
        }
    }
    // reducers:AuthenticationReducer(state,action),
})
const {actions:AuthenticationAction,reducer:AuthenticationReducer}=AuthenticationSlice
export const SelectAccessToken=(state)=>state.access_token
export const SelectRefreshToken=(state)=>state.refresh_token
export const SelectLoggedInStatus=(state)=>state.status

export  {AuthenticationAction,AuthenticationReducer}







const LocationState={
    'origin':null,
    'destination':null,
    'origin_desc':null,
    'destination_desc':null,
    'data':null,
    'service':null,
    'schedule':{},
    

    // 'schedule_timestamp':null
}
export const LocationSlice=createSlice({
    name:'location',
    initialState:LocationState,
    reducers:{
        setOrigin:(state,action)=>{
            state.origin=action.payload
        },
        setDestination:(state,action)=>{
            state.destination=action.payload
        },
        setTravelTimeData:(state,action)=>{
            state.data=action.payload
        },

        setService:(state,action)=>{
            state.service=action.payload
        },
        setSchedule:(state,action)=>{
            state.schedule=action.payload
        }
    }
})
const {actions:LocationAction,reducer:LocationReducer}=LocationSlice
export {LocationAction,LocationReducer}



export const selectTripData=(state)=>state.locationreducer