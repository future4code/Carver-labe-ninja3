import React from 'react'
import { Card } from './components/CardServices/Card.js'
import { GrupCards } from './components/CardServices/styledCard'

function App() {

	const mockService = {
		name: "Limpeza Doméstica",
		value: 200,
		date: '20/11/2022'
	}

	return (

		<div>
			<GrupCards>
				<Card 
				service={mockService}
				/>
			</GrupCards>



		</div>

	)
}

export default App
