import { addToCart as addToCartAction } from '../services/cartSlice'
import { AppDispatch } from '../services/store'

export const addToCart = (productId: number) => (dispatch: AppDispatch) => {
  dispatch(addToCartAction(productId))
  console.log('addToCart', productId)
  return alert('Добавлено в корзину')
}
