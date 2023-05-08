import { pizzaList } from '../data/data.js'
import PizzaItem from './PizzaItem.js'
import '../styles/Menu.css'

function Menu({ cart, updateCart }) {

	function addToCart(name, price) {
		const currentPizzaAdded = cart.find((pizza) => pizza.name === name)
		if (currentPizzaAdded) {
			const cartFilteredCurrentPizza = cart.filter(
				(pizza) => pizza.name !== name
			)
			updateCart([
				...cartFilteredCurrentPizza,
				{ name, price, amount: currentPizzaAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='shopping-list'>

			<ul className='pizza-list'>
				{pizzaList.map(({ id, img, name, price }) =>
					 (
						<div key={id}>
							<PizzaItem
								img={img}
								name={name}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Add</button>
						</div>
					)
				)}
			</ul>
		</div>
	)
}

export default Menu