import { useState } from 'react'

const ItemsCounter = () => {
  const [count, setCount] = useState<number>(0)
  const onHandleClick = (type: 'plus' | 'minus') => {
    if (type === 'plus') {
      setCount((prev) => prev + 1)
    } else {
      setCount((prev) => Math.max(0, prev - 1))
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          onHandleClick('minus')
        }}
      >
        -
      </button>
      {count}
      <button
        onClick={() => {
          onHandleClick('plus')
        }}
      >
        +
      </button>
    </div>
  )
}
export default ItemsCounter
