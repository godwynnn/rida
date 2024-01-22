import { createStore } from "redux"
import { configureStore } from "@reduxjs/toolkit"
// import AuthenticationReducer from '../reducer/reducer'
import { AuthenticationReducer } from "../reducer/reducer"

export const store=configureStore({
    reducer:{
        authreducer:AuthenticationReducer
    }
})
// export default store