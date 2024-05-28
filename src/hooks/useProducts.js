import { useEffect, useState } from 'react'
import { products as initialProducts } from './../mocks/productos.json'

export function useProducts ({ filters }) {
  
  // const [products] = useState(initialProducts)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const productsAPI = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products?limit=80&skip=0');
            const data = await response.json();
            setProducts(data?.products);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    productsAPI();
}, [])
  

  const productsFilter = products.filter((product) => (
    (filters.categories.length <= 0 ||
    filters.categories.filter((cat) => cat.srcName === product.category).length > 0) &&
    product.price >= filters.minPrice)
  ).filter(item => item.category !== "groceries")

  return { productsFilter }
}
