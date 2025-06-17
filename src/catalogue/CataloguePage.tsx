import { Link, useParams } from 'react-router-dom'

import { categoriesArray } from '../categoriesArray'

const CataloguePage = () => {
  const { category } = useParams()
  const currentCategory =
    categoriesArray.find((c) => c.key === category) ?? categoriesArray[0]
  const title = currentCategory.categoryName
  return (
    <div>
      <nav>
        {categoriesArray.map((c) => (
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
            <div>{product.price} ₽</div>
          </>
        ))}
      </div>
    </div>
  )
}

export default CataloguePage
