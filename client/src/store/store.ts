import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userSlice from "./reducers/user/userSlice";
import deviceSlice from "./reducers/device/deviceSlice";

const rootReducer = combineReducers({
    userSlice,
    deviceSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType['dispatch']
