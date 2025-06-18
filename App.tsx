import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import PagesNavigation from './src/PagesNavigation'

const App = () => {
  return (
    <BrowserRouter>
      <PagesNavigation />
      <ToastContainer />
    </BrowserRouter>
  )
}
export default App
