import './style.css';

import { Card } from '../../components/Card'

export function Home(){
	return(
		<div>
			<h1>Lista de Presença</h1>
			<input type="text" placeholder="Digite o nome..."/>
			<button>Adicionar</button>
			
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>
	)
}