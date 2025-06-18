import { Link } from 'react-router-dom'
import { ToastContentProps } from 'react-toastify'

const CartToast = ({ closeToast }: ToastContentProps) => {
  return (
    <div>
      <p>Товар добавлен в корзину</p>
      <Link onClick={closeToast} to="/cart">
        Перейти в корзину
      </Link>
    </div>
  )
}

export default CartToast
