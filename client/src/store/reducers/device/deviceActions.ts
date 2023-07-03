import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    createBrand,
    createDevice,
    createType,
    fetchBrands,
    fetchDevices,
    fetchOneDevice,
    fetchTypes, getAllFromCart, removeCartItem
} from "../../../http/deviceAPI";


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
    'device/addDevice',
    async (device: any, {rejectWithValue}) => {
        try {
            return await createDevice(device)
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getOneDevice = createAsyncThunk(
    'device/getOneDevice',
    async (id: number, {rejectWithValue}) => {
        try {
            return await fetchOneDevice(id)
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)


export const getFromCart = createAsyncThunk(
    'device/getAllFromCart',
    async (_, {rejectWithValue}) => {
        try {
            return await getAllFromCart()
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const removeFromCart = createAsyncThunk(
    'device/getAllFromCart',
    async (id: number, {rejectWithValue}) => {
        try {
            return await removeCartItem(id)
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

