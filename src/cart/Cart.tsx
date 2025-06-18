import styled from 'styled-components'

const Cart = () => {
  return (
    <CartContainer>
      <div style={{ color: 'black' }}>Корзина</div>
      <CartItems>тут товары</CartItems>
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
const CartItems = styled.div``
