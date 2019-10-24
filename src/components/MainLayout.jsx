import React from 'react';

const MainLayout = props => {
	return (
		<main className="container">
			<section className="row my-2 justify-content-center">
                {props.children}
            </section>
		</main>
	);
};

export default MainLayout;
