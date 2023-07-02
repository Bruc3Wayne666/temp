import {createAsyncThunk} from "@reduxjs/toolkit";
import {registration, login} from "../../../http/userAPI";
import {createBrand, createDevice, createType, fetchBrands, fetchDevices, fetchTypes} from "../../../http/deviceAPI";
import {Device} from "./deviceSlice";


export const getTypes = createAsyncThunk(
    'device/getTypes',
    async (_, {rejectWithValue}) => {
        try {
            return await fetchTypes()
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const addType = createAsyncThunk(
    'user/addType',
    async (type: string, {rejectWithValue}) => {
        try {
            return await createType(type)
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getBrands = createAsyncThunk(
    'device/getBrands',
    async (_, {rejectWithValue}) => {
        try {
            return await fetchBrands()
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const addBrand = createAsyncThunk(
    'user/addBrand',
    async (brand: string, {rejectWithValue}) => {
        try {
            return await createBrand(brand)
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getDevices = createAsyncThunk(
    'device/getDevices',
    async ({typeId, brandId, page, limit = 5}: {typeId: number, brandId: number, page: number, limit: number}, {rejectWithValue}) => {
        try {
            return await fetchDevices(typeId, brandId, page, limit)
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const addDevice = createAsyncThunk(
    'user/addDevice',
    async (device: any, {rejectWithValue}) => {
        try {
            return await createDevice(device)
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getOneDevice = createAsyncThunk(
    'user/getOneDevice',
    async (id: number, {rejectWithValue}) => {
        try {
            return await getOneDevice(id)
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

