import {checkLogin, logIn, register} from "./userActions";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { createSlice } from "@reduxjs/toolkit";


interface User {
    id: number
    email: string
    role: string
}

interface IUserState {
    isLoading: boolean
    isAuth: boolean
    user: User
}

const initialState: IUserState = {
    isLoading: false,
    isAuth: false,
    user: {
        id: 0,
        email: '',
        role: ''
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // setIsAuth(state, {payload}: PayloadAction<boolean>) {
        //     state.isAuth = payload
        // },
        // setUser(state, {payload}: PayloadAction<any>) {
        //     state.user = payload
        // },
        logout(state) {
            state = initialState
        }
    },
    extraReducers: {
        [register.pending.type]: (state) => {
            state.isLoading = true
        },
        [register.fulfilled.type]: (state, {payload}: PayloadAction<User>) => {
            state.isLoading = false
            state.user = payload
            state.isAuth = true
        },
        [logIn.pending.type]: (state) => {
            state.isLoading = true
        },
        [logIn.fulfilled.type]: (state, {payload}: PayloadAction<User>) => {
            state.isLoading = false
            state.user = payload
            state.isAuth = true
        },
        [checkLogin.fulfilled.type]: (state, {payload}: PayloadAction<User>) => {
            state.user = payload
            state.isAuth = true
        }
    }
})

export default userSlice.reducer
