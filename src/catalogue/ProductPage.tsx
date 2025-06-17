import { useParams } from 'react-router-dom'

import { useGetCategoriesQuery } from '../services/api'
import { addToCart } from './utils/addToCart'
import ItemsCounter from './utils/ItemsCounter'

const ProductPage = () => {
  const { id } = useParams()
  const { data: categories, isLoading, error } = useGetCategoriesQuery()
  if (isLoading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка загрузки</div>
  const allProducts = categories.flatMap((c) => c.products ?? [])
  const numericId = parseInt(id || '', 10)
  const product = allProducts.find((p) => p.id === numericId)

  return (
    <div style={{ color: 'black' }}>
      <h1>{product?.itemName}</h1>
      <img alt={product?.itemName} src={product?.img} width={300} />
      <p>Цена: {product?.price} ₽</p>
      <ItemsCounter productId={product.id} />
      <p>
        <strong>Итого: ₽</strong>
      </p>
      <button onClick={() => addToCart()}>Купить</button>
    </div>
  )
}
export default ProductPage
