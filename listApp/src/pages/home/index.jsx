import React, {useState} from 'react';
import './style.css';

import { Card } from '../../components/Card'

export function Home(){
	const [studentName, setStudentName] = useState();
	
	return(
		<div>
			<h1>Lista de Presença</h1>
			<input type="text" placeholder="Digite o nome..." onChange={e => setStudentName(e.target.value)}/>
			<button>Adicionar {studentName}</button>
			
			<Card name="primeiro" city="1"/>
			<Card name="segundo" city="2"/>
			<Card name="terceiro" city="3"/>
			<Card name="quarto" city="4"/>
		</div>
	)
}