import { BrowserRouter } from 'react-router-dom'

import PagesNavigation from './src/PagesNavigation'

const App = () => {
  return (
    <BrowserRouter>
      <PagesNavigation />
    </BrowserRouter>
  )
}
export default App
