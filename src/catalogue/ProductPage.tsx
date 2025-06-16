import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const { id } = useParams()

  return (
    <div style={{ color: 'black' }}>
      <h1>Товар #{id}</h1>
    </div>
  )
}
export default ProductPage
