import { Link, useParams } from 'react-router-dom'
import { useGetCategoriesQuery } from 'services/api'

import ItemsCounter from './utils/ItemsCounter'

const CataloguePage = () => {
  const { category } = useParams()
  const { data: categories, isLoading } = useGetCategoriesQuery()
  if (isLoading) return <div>Загрузка...</div>
  const currentCategory =
    categories?.find((c) => c.key === category) ?? categories[0]
  const title = currentCategory.categoryName
  return (
    <div>
      <nav>
        {categories?.map((c) => (
          <Link key={c.key} to={`/catalog/${c.key}`}>
            {c.categoryName}
          </Link>
        ))}
      </nav>
      <h1>{title}</h1>
      <div>
        {currentCategory.products?.map((product) => (
          <>
            <Link
              key={product.id}
              to={`/catalogue/item/${product.id}-${product.itemName}`}
            >
              <div>
                <img alt={product.itemName} src={product.img} width={200} />
                <div>{product.itemName}</div>
              </div>
            </Link>
            <ItemsCounter productId={product.id} />
            <div>{product.price} ₽</div>
          </>
        ))}
      </div>
    </div>
  )
}

export default CataloguePage
