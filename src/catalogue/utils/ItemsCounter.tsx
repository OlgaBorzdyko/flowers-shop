import { useDispatch, useSelector } from 'react-redux'

import { decremented, incremented } from '../../services/counterSlice'
import { AppDispatch, RootState } from '../../services/store'

const ItemsCounter = ({ productId }: { productId: number }) => {
  const dispatch = useDispatch<AppDispatch>()
  const count = useSelector(
    (state: RootState) => state.counter.counts[productId] || 1
  )
  return (
    <div>
      <button
        onClick={() => {
          dispatch(decremented({ productId }))
        }}
      >
        -
      </button>
      {count}
      <button
        onClick={() => {
          dispatch(incremented({ productId }))
        }}
      >
        +
      </button>
    </div>
  )
}
export default ItemsCounter
