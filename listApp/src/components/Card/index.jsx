import './style.css';

export function Card(card){
	return(
		<div>
			<strong>{card.name}</strong>
			<small>{card.time}</small>
		</div>
	)
}