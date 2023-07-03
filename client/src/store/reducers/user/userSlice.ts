import {checkLogin, logIn, register} from "./userActions";
import {PayloadAction} from "@reduxjs/toolkit/dist/createAction";
import {createSlice} from "@reduxjs/toolkit";


const initialUser = {
    id: 0,
    email: '',
    role: ''
}

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
    user: initialUser
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state) {
            state.isLoading = false
            state.isAuth = false
            state.user = initialUser
            localStorage.removeItem('token')
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
        [checkLogin.pending.type]: (state) => {
            state.isLoading = true
        },
        [checkLogin.fulfilled.type]: (state, {payload}: PayloadAction<User>) => {
            state.isLoading = false
            state.user = payload
            state.isAuth = true
        },
        [checkLogin.rejected.type]: (state) => {
            state.isLoading = false
            state.user = initialUser
            state.isAuth = false
        }
    }
})

export const {logout} = userSlice.actions
export default userSlice.reducer
