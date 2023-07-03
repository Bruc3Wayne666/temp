import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getBrands, getDevices, getFromCart, getOneDevice, getTypes, removeFromCart} from "./deviceActions";


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
    cart: Device[]
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
    cart: [],
    currentDevice: {
        id: 0,
        name: '',
        price: 0,
        rating: 0,
        img: '',
        createdAt: '',
        updatedAt: '',
        typeId: 0,
        brandId: 0,
        info: []
    },
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
        setSelectedBrand(state, {payload}: PayloadAction<Type>) {
            state.page = 1
            state.selectedBrand = payload
        },
        setSelectedType(state, {payload}: PayloadAction<Brand>) {
            state.page = 1
            state.selectedType = payload
        }
    },
    extraReducers: {
        [getDevices.pending.type]: (state) => {
            state.isLoading = true
        },
        [getDevices.fulfilled.type]: (state, {payload}: PayloadAction<{count: number, rows: Device[]}>) => {
            state.isLoading = false
            state.devices = payload.rows
            state.totalCount = payload.count
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
        },
        // [getFromCart.pending.type]: (state) => {
        //     state.isLoading = true
        // },
        // [getFromCart.fulfilled.type]: (state, {payload}: PayloadAction<Device[]>) => {
        //     state.cart = payload
        //     state.isLoading = false
        // },
        // [removeFromCart.pending.type]: (state) => {
        //     state.isLoading = true
        // },
        // [removeFromCart.fulfilled.type]: (state, {payload}: PayloadAction<{id: number}>) => {
        //     state.isLoading = false
        //     state.cart = state.cart.filter(item => item.id !== payload.id)
        // }
    }
})

export const {setPage, setSelectedBrand, setSelectedType} = deviceSlice.actions
export default deviceSlice.reducer
