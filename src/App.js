import './App.css';
import Product from './components/Product';
import Header from './components/Header';
import { useEffect, useState } from 'react';

function App() {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
      let cartItems = JSON.parse(localStorage.getItem('products'));
      if(!cartItems){
      fetch('https://dnc0cmt2n557n.cloudfront.net/products.json')
      .then(response => response.json())
      .then(data => {
        setCartData(data.products)
        localStorage.setItem('products', JSON.stringify(data.products))
      })
    }
    else{
      setCartData(cartItems);
    }
  },[])

  const addQuantity = (id) =>{
    console.log(id, typeof id)
    let products = JSON.parse(localStorage.getItem('products'));
    products = products.map(product => {
      if(product.id === id) {
        return {
          ...product,
          quantity : product.quantity ? product.quantity+1 : 2
        }
      }
      else return product;
    })
    localStorage.setItem('products', JSON.stringify(products))
    setCartData(products)
  }

  const removeQuantity = (id) => {
    let products = JSON.parse(localStorage.getItem('products'));
    products = products.map(product => {
      if(product.id === id && product.quantity > 1) {
        return {
          ...product,
          quantity : product.quantity-1
        }
      }
      else if(product.id === id){
        return null;
      }
      else return product;
    })
    products = products.filter(Boolean);
    if(products.length){
      localStorage.setItem('products', JSON.stringify(products))
    setCartData(products)
    }
    else{
      setCartData(products)
      localStorage.removeItem('products')
    }
  }

  return (
    <div className="App">
     <Header products={cartData}/>
     <div>
     {cartData.length ? cartData.map(product => <Product product={product} key={product.id} add={addQuantity} remove={removeQuantity}/>) : <h2>No Items to display!.. refresh to load items.</h2>}
     </div>
    </div>
  );
}

export default App;
