import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AlbumDetails from './components/AlbumDetails';

const App = () => {
	return (
		<BrowserRouter>
			<main className="container">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/details/:albumid" component={AlbumDetails} />
				</Switch>
			</main>
		</BrowserRouter>
	);
};

export default App;
