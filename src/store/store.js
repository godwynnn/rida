
import { configureStore,combineReducers } from "@reduxjs/toolkit"
import { AuthenticationReducer } from "../reducer/reducer"
import { LocationReducer } from "../reducer/reducer"

export const store=configureStore({
    reducer:{
        authreducer:AuthenticationReducer,
        locationreducer:LocationReducer
    },
    middleware: getDefaultMiddleware =>getDefaultMiddleware({
      serializableCheck: false,
    }),
})
// export default store