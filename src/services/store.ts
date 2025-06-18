import { configureStore } from '@reduxjs/toolkit'

import { catalogueApi } from './api'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [catalogueApi.reducerPath]: catalogueApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catalogueApi.middleware)
})

store.subscribe(() => {
  try {
    const state = store.getState()
    localStorage.setItem('cart', JSON.stringify(state.cart))
  } catch (e) {
    console.error('Ошибка сохранения в localStorage', e)
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
