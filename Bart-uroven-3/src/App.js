import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Architecture from './components/Architecture'

function App() {
	return (
		<div className="App">
			<main className="content">
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/architecture" component={Architecture} />
				</Switch>
			</main>
		</div>
	)
}

export default App
