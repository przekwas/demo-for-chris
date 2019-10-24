import React from 'react';

const NavButton = props => {
	return (
		<button onClick={() => props.handleClick()} className="btn btn-outline-primary shadow mx-2">
			{props.text}
		</button>
	);
};

export default NavButton;
