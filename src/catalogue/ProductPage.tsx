import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { categoriesArray } from '../categoriesArray'
import { addToCart } from './utils/addToCart'
import ItemsCounter from './utils/ItemsCounter'

const ProductPage = () => {
  const [count, setCount] = useState<number>(1)
  const { id } = useParams()
  const allProducts = categoriesArray
    .filter((c) => Array.isArray(c.products))
    .flatMap((c) => c.products)
  const numericId = parseInt(id || '', 10)
  const product = allProducts.find((p) => p.id === numericId)
  const totalPrice = count * product.price

  return (
    <div style={{ color: 'black' }}>
      <h1>{product?.itemName}</h1>
      <img alt={product?.itemName} src={product?.img} width={300} />
      <p>Цена: {product?.price} ₽</p>
      <ItemsCounter onChange={(value: number) => setCount(value)} />
      <p>
        <strong>Итого: {totalPrice} ₽</strong>
      </p>
      <button onClick={() => addToCart()}>Купить</button>
    </div>
  )
}
export default ProductPage
