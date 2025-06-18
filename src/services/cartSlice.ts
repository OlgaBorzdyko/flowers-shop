import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartState {
  items: number[]
  counts: Record<number, number>
}

const initialState: CartState = {
  items: [],
  counts: {}
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
    },
    setCount: (
      state,
      action: PayloadAction<{ productId: number; count: number }>
    ) => {
      const { productId, count } = action.payload
      state.counts[productId] = count
    },
    incremented: (state, action: PayloadAction<{ productId: number }>) => {
      const { productId } = action.payload
      state.counts[productId] = (state.counts[productId] || 0) + 1
    },
    decremented: (state, action: PayloadAction<{ productId: number }>) => {
      const { productId } = action.payload
      state.counts[productId] = Math.max(1, (state.counts[productId] || 0) - 1)
    }
  }
})

export const {
  addToCart,
  removeFromCart,
  clearCart,
  setCount,
  incremented,
  decremented
} = cartSlice.actions
export default cartSlice.reducer
