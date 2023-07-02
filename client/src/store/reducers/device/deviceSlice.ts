import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getBrands, getDevices, getOneDevice, getTypes} from "./deviceActions";


export interface Device {
    id: number
    name: string
    price: number
    rating: number
    img: string
    createdAt: string
    updatedAt: string
    typeId: number
    brandId: number
    info: any[]
}

export interface Brand {
    id: number
    name: string
    createdAt: string
    updatedAt: string
}

export interface Type {
    id: number
    name: string
    createdAt: string
    updatedAt: string
}

interface IDeviceState {
    isLoading: boolean
    types: Type[]
    brands: Brand[]
    devices: Device[]
    currentDevice: Device
    selectedType: any
    selectedBrand: any
    page: number
    totalCount: number
    limit: number
}

const initialState: IDeviceState = {
    isLoading: false,
    types: [],
    brands: [],
    devices: [],
    currentDevice: null,
    selectedType: {},
    selectedBrand: {},
    page: 1,
    totalCount: 0,
    limit: 3
}

export const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        setPage(state, {payload}: PayloadAction<number>) {
            state.page = payload
        },
        setSelectedBrand(state, {payload}: PayloadAction<number>) {
            state.page = 1
            state.selectedBrand = payload
        },
        setSelectedType(state, {payload}: PayloadAction<number>) {
            state.page = 1
            state.selectedType = payload
        }
    },
    extraReducers: {
        [getDevices.pending.type]: (state) => {
            state.isLoading = true
        },
        [getDevices.fulfilled.type]: (state, {payload}: PayloadAction<Device[]>) => {
            state.isLoading = false
            state.devices = payload
        },
        [getBrands.pending.type]: (state) => {
            state.isLoading = true
        },
        [getBrands.fulfilled.type]: (state, {payload}: PayloadAction<Brand[]>) => {
            state.isLoading = false
            state.brands = payload
        },
        [getTypes.pending.type]: (state) => {
            state.isLoading = true
        },
        [getTypes.fulfilled.type]: (state, {payload}: PayloadAction<Type[]>) => {
            state.isLoading = false
            state.types = payload
        },
        [getOneDevice.pending.type]: (state) => {
            state.isLoading = true
        },
        [getOneDevice.fulfilled.type]: (state, {payload}: PayloadAction<Device>) => {
            state.isLoading = false
            state.currentDevice = payload
        }
    }
})

export default deviceSlice.reducer
