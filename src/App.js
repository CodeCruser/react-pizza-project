
import { useState, useEffect } from 'react'
import Cart from './components/Cart';
import Menu from './components/Menu';



function App() {

  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

  return (
    <div className='layout-inner'>
    <Cart cart={cart} updateCart={updateCart} />
    <Menu cart={cart} updateCart={updateCart} />
  </div>
  );
}

export default App;
