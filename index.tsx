import './global.css'

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './src/services/store'

const rootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootElement)
if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./src/mocks/browser')
  await worker.start()
}

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
