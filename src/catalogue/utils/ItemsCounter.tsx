import { useEffect, useState } from 'react'

const ItemsCounter = ({
  initialCount = 1,
  onChange
}: {
  initialCount?: number
  onChange: (count: number) => void
}) => {
  const [count, setCount] = useState<number>(initialCount)
  console.log(initialCount)
  const onHandleClick = (type: 'plus' | 'minus') => {
    setCount((prev) => {
      return type === 'plus' ? prev + 1 : Math.max(1, prev - 1)
    })
  }
  useEffect(() => {
    onChange?.(count)
  }, [count, onChange])

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
