import '../styles/PizzaItem.css';

function PizzaItem({ img, name, price }) {
	return (
		<li className='pizza-item' >
			<span className='pizza-item-price'>{price}€</span>
			<img className='pizza-item-cover' src={img} alt={`${name} img`} />
			{name}
		</li>
	)
}

export default PizzaItem