import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './createslice'

export const store = configureStore({
    reducer: {
        card: cardReducer,
    },
})