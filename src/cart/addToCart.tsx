import { toast } from 'react-toastify'

import { addToCart as addToCartAction } from '../services/cartSlice'
import { AppDispatch } from '../services/store'
import CartToast from './CartToast'

export const addToCart = (productId: number) => (dispatch: AppDispatch) => {
  dispatch(addToCartAction(productId))

  toast((props) => <CartToast {...props} />, {
    position: 'bottom-right',
    autoClose: 5000,
    closeOnClick: true
  })
}
