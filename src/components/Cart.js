import { useState } from 'react'
import '../data/data.js';
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, pizzaList) => acc + pizzaList.amount * pizzaList.price,
		0
	)

	return isOpen ? (
		<div className='cart'>
			<button
				className='toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Cart</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Empty Cart</button>
				</div>
			) : (
				<div>Your Cart is Empty</div>
			)}
		</div>
	) : (
		<div className='cart-closed'>
			<button
				className='cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Open Cart
			</button>
		</div>
	)
}

export default Cart