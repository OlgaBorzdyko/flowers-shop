import CataloguePage from 'catalogue/CataloguePage'
import { Route, Routes } from 'react-router-dom'

import ThemeWrapper from '../ThemeWrapper'
import Cart from './cart/Cart'
import ProductPage from './catalogue/ProductPage'
import Test from './test'

const PagesNavigation = () => {
  return (
    <div>
      <ThemeWrapper>
        <Routes>
          <Route element={<Test />} path="/" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<CataloguePage />} path="/catalogue/:category" />
          <Route element={<ProductPage />} path="/catalogue/item/:id" />
        </Routes>
      </ThemeWrapper>
    </div>
  )
}

export default PagesNavigation
