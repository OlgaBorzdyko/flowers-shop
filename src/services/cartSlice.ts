import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartState {
  items: number[]
}

const initialState: CartState = {
  items: []
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload)
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((id) => id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
