import React, {useState, useEffect} from 'react';
import './style.css';

import { Card } from '../../components/Card'

export function Home(){
	const [studentName, setStudentName] = useState('');
	const [students, setStudents] = useState([]);
	
	function handleAddStudent(){
		const newStudent = {
			name: studentName,
			time: new Date().toLocaleTimeString("pt-br", {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
			})
		}
			setStudents(prevState => [...prevState, newStudent]);
	};
	
	useEffect(() => {
		console.log("Um aluno foi adicionado!");
	}, [students]);
	
	return(
		<div>
			<h1>Lista de Presença</h1>
			<input type="text" placeholder="Digite o nome..." onChange={e => setStudentName(e.target.value)}/>
			<button onClick={handleAddStudent}>Adicionar {studentName}</button>
			
			{
				students.map((students, index) => (<Card key={index} name={students.name} time={students.time}/>))
			}
		</div>
	)
}