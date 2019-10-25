import React from 'react';
import { Link } from 'react-router-dom';

const Navbah = () => {
	return (
		<nav className="nav justify-content-center shadow p-2">
			<Link to="/" className="btn btn-outline-primary mx-2">Home</Link>
			<Link to="/about" className="btn btn-outline-primary mx-2">About</Link>
			<Link to="/details/cheese" className="btn btn-outline-primary mx-2">Pizza Details Lol</Link>
		</nav>
	);
};

export default Navbah;
