import { createSlice } from "@reduxjs/toolkit";
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
        Login: (state,action)=>{
            
            state.status=true;
           
        
        },

        Logout:(state,action)=>{
            console.log('logged out')
        }
    }
    // reducers:AuthenticationReducer(state,action),
})
const {actions:AuthenticationAction,reducer:AuthenticationReducer}=AuthenticationSlice
export const SelectAccessToken=(state)=>{state.access_token}
export const SelectRefreshToken=(state)=>{state.refresh_token}
export const SelectLoggedInStatus=(state)=>{state.status}

export  {AuthenticationAction,AuthenticationReducer}







const LocationState={
    origin:null,
    destination:null,
    origin_desc:null,
    destination_desc:null,
    data:null,
    service:null,
    schedule:{},
    map_ready:false,
    showTrackerModal:false,
    enableTracker:false,
    

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
            state.map_ready=action.payload.ready
        },

        setService:(state,action)=>{
            state.service=action.payload
        },
        setSchedule:(state,action)=>{
            state.schedule=action.payload
        },
        setTracker:(state,action)=>{
            state.showTrackerModal=action.payload.showTrackerModal
            state.enableTracker=action.payload.enableTracker
            // console.log(action.payload)
        }
    }
})
const {actions:LocationAction,reducer:LocationReducer}=LocationSlice
export {LocationAction,LocationReducer}



export const selectTripData=(state)=>state.locationreducer