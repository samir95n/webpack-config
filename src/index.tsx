import ReactDom from 'react-dom/client'
import App from './App'

const root = ReactDom.createRoot(
  document.getElementById('root') as HTMLInputElement
)
root.render(<App />)
