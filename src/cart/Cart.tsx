import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { useGetCategoriesQuery } from '../services/api'
import { clearCart } from '../services/cartSlice'
import { AppDispatch, RootState } from '../services/store'

const Cart = () => {
  const { data: categories } = useGetCategoriesQuery()
  const dispatch = useDispatch<AppDispatch>()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const counts = useSelector((state: RootState) => state.cart.counts)
  const allProducts = categories?.flatMap((c) => c.products ?? []) ?? []
  console.log('items в cart:', cartItems, counts)
  return (
    <CartContainer>
      <h2>Корзина</h2>
      {cartItems.map((productId) => {
        const product = allProducts.find((item) => item.id === productId)
        const count = counts[productId] || 1

        if (!product) return null

        return (
          <CartItem key={productId}>
            <img alt={product.itemName} src={product.img} width={80} />
            <div>
              <h4>{product.itemName}</h4>
              <p>Цена: {product.price} ₽</p>
              <p>Количество: {count}</p>
              <p>Сумма: {product.price * count} ₽</p>
            </div>
          </CartItem>
        )
      })}
      <button onClick={() => dispatch(clearCart())}>Очистить корзину</button>
    </CartContainer>
  )
}

export default Cart

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

const CartItem = styled.div``
