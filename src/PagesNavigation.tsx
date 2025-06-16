import { Route, Routes } from 'react-router-dom'

import Catalogue from './Catalogue'
import Test from './test'

const PagesNavigation = () => {
  return (
    <div>
      <Routes>
        <Route element={<Test />} path="/" />
        <Route element={<Catalogue />} path="/catalogue" />
      </Routes>
    </div>
  )
}

export default PagesNavigation
