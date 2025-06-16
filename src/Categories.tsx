import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { categoriesArray } from './categoriesArray'

const Categories = () => {
  return (
    <CategoriesWrap>
      {categoriesArray.map((item, index) => (
        <Category key={index} style={{ backgroundColor: item.backgroundColor }}>
          {item.categoryName}
          <img
            alt={item.categoryName}
            src={item.img}
            style={{ width: '200px' }}
          />
          <Link to={`/catalogue/${item.key}`}>{item.categoryName}</Link>
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

//<Link to={`/catalogue/${item.category}`}>{item.category}</Link>
