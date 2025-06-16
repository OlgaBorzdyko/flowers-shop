import { Link, useParams } from 'react-router-dom'

import { categoriesArray } from '../categoriesArray'

const CataloguePage = () => {
  const { category } = useParams()
  const currentCategory =
    categoriesArray.find((c) => c.key === category) ?? categoriesArray[0]
  const title = currentCategory.categoryName
  return (
    <div>
      <h1>{title}</h1>

      <nav>
        {categoriesArray.map((c) => (
          <Link key={c.key} to={`/catalog/${c.key}`}>
            {c.categoryName}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default CataloguePage
