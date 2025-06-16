import CataloguePage from 'catalogue/CataloguePage'
import { Route, Routes } from 'react-router-dom'

import ProductPage from './catalogue/ProductPage'
import Test from './test'

const PagesNavigation = () => {
  return (
    <div>
      <Routes>
        <Route element={<Test />} path="/" />
        <Route element={<CataloguePage />} path="/catalogue/:category" />
        <Route element={<ProductPage />} path="/catalogue/item/:id" />
      </Routes>
    </div>
  )
}

export default PagesNavigation
