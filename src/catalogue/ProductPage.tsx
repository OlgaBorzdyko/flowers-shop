import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { addToCart } from '../cart/addToCart'
import { useGetCategoriesQuery } from '../services/api'
import { AppDispatch } from '../services/store'
import ItemsCounter from './utils/ItemsCounter'

const ProductPage = () => {
  const dispatch = useDispatch<AppDispatch>()
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
      <button onClick={() => dispatch(addToCart(product.id))}>Купить</button>
    </div>
  )
}
export default ProductPage
