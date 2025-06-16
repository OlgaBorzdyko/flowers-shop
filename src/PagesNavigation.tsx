import CataloguePage from 'catalogue/CataloguePage'
import { Route, Routes } from 'react-router-dom'

import Test from './test'

const PagesNavigation = () => {
  return (
    <div>
      <Routes>
        <Route element={<Test />} path="/" />
        <Route element={<CataloguePage />} path="/catalogue" />
      </Routes>
    </div>
  )
}

export default PagesNavigation
