import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Dashboard, Login, Signup } from './page';

function App() {
	const appName = process.env.REACT_APP_NAME;
	return (
		<Router>
			<div>
				<section>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
					</Routes>
				</section>
			</div>
		</Router>
	);
}

export default App;
