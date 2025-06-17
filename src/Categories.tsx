import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { useGetCategoriesQuery } from './services/api'

const Categories = () => {
  const { data: categories } = useGetCategoriesQuery()

  return (
    <CategoriesWrap>
      {categories?.map((item) => (
        <Category
          key={item.key}
          style={{ backgroundColor: item.backgroundColor }}
        >
          <Link to={`/catalogue/${item.key}`}>
            <h2>{item.categoryName}</h2>
            <img
              alt={item.categoryName}
              src={item.img}
              style={{ width: '200px' }}
            />
          </Link>
        </Category>
      ))}
    </CategoriesWrap>
  )
}
export default Categories

const CategoriesWrap = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 10px;
`

const Category = styled.div`
  flex: 1 1 calc(50% - 10px);
  box-sizing: border-box;
`
