import {createAsyncThunk} from "@reduxjs/toolkit";
import {registration, login, check} from "../../../http/userAPI";


export const register = createAsyncThunk(
    'user/register',
    async ({email, password}: { email: string, password: string }, {rejectWithValue}) => {
        try {
            return await registration(email, password)
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const logIn = createAsyncThunk(
    'user/login',
    async ({email, password}: { email: string, password: string }, {rejectWithValue}) => {
        try {
            return await login(email, password)
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)


export const checkLogin = createAsyncThunk(
    'user/checkLogin',
    async (_, {rejectWithValue}) => {
        try {
            return await check()
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
