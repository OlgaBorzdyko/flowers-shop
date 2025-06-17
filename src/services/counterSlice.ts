import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  counts: Record<number, number>
}

const initialState: CounterState = {
  counts: {}
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
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

export const { setCount, incremented, decremented } = counterSlice.actions
export default counterSlice.reducer
