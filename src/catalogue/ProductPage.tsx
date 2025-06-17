import { useParams } from 'react-router-dom'

import { categoriesArray } from '../categoriesArray'

const ProductPage = () => {
  const { id } = useParams()
  const allProducts = categoriesArray
    .filter((c) => Array.isArray(c.products))
    .flatMap((c) => c.products)
  console.log(allProducts)
  const numericId = parseInt(id || '', 10)
  const product = allProducts.find((p) => p.id === numericId)

  return (
    <div style={{ color: 'black' }}>
      <h1>{product?.itemName}</h1>
      <img alt={product?.itemName} src={product?.img} width={300} />
      <p>Цена: {product?.price} ₽</p>
    </div>
  )
}
export default ProductPage
