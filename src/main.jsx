import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import FilterProvider from './context/FilterContext.jsx'
import CartProvider from './context/CartContext.jsx'
import { App } from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FilterProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </FilterProvider>
)
