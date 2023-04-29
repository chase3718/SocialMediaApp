import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
	return (
		<div>
			<p>This is the dashboard page.</p>
			<Link to="/login">Log in</Link>
			<br />
			<Link to="/signup">Sign up</Link>
		</div>
	);
}

export default Dashboard;
