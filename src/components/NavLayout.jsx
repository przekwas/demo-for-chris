import React from 'react';

const NavLayout = props => {
	return <nav className="nav p-3 my-2 justify-content-center shadow w-50 mx-auto">{props.children}</nav>;
};

export default NavLayout;
