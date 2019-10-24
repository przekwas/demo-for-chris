import React from 'react';
import MainLayout from './components/MainLayout';
import NavLayout from './components/NavLayout';
import NavButton from './components/NavButton';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAboutLoaded: false,
			isContactLoaded: false,
			albums: []
		};
		this.handleContactLoad = this.handleContactLoad.bind(this);
		this.handleAboutLoad = this.handleAboutLoad.bind(this);
		this.handleHomeLoad = this.handleHomeLoad.bind(this);
	}

	handleAboutLoad() {
		this.setState({
			isAboutLoaded: true,
			isContactLoaded: false
		});
	}

	handleContactLoad() {
		this.setState({
			isAboutLoaded: false,
			isContactLoaded: true
		});
	}

	handleHomeLoad() {
		this.setState({
			isAboutLoaded: false,
			isContactLoaded: false
		});
	}

	render() {
		if (!this.state.isAboutLoaded && !this.state.isContactLoaded) {
			//Home Page!
			return (
				<>
					<NavLayout>
						<NavButton text="HOME= PAGE BITCH" handleClick={this.handleHomeLoad} />
						<NavButton text="ABOUT PAGE BITCH" handleClick={this.handleAboutLoad} />
						<NavButton text="CONTACT PAGE BITCH" handleClick={this.handleContactLoad} />
					</NavLayout>
					<MainLayout>
						<h1 className="col-12 text-center text-white bg-primary p-5">HOME PAGE FAM</h1>
					</MainLayout>
				</>
			);
		} else if (this.state.isAboutLoaded && !this.state.isContactLoaded) {
			return (
				<>
					<NavLayout>
						<NavButton text="HOME= PAGE BITCH" handleClick={this.handleHomeLoad} />
						<NavButton text="ABOUT PAGE BITCH" handleClick={this.handleAboutLoad} />
						<NavButton text="CONTACT PAGE BITCH" handleClick={this.handleContactLoad} />
					</NavLayout>
					<MainLayout>
						<h1 className="col-12 text-center text-white bg-primary p-5">ABOUT PAGE FAM</h1>
					</MainLayout>
				</>
			);
		} else if (!this.state.isAboutLoaded && this.state.isContactLoaded) {
			return (
				<>
					<NavLayout>
						<NavButton text="HOME= PAGE BITCH" handleClick={this.handleHomeLoad} />
						<NavButton text="ABOUT PAGE BITCH" handleClick={this.handleAboutLoad} />
						<NavButton text="CONTACT PAGE BITCH" handleClick={this.handleContactLoad} />
					</NavLayout>
					<MainLayout>
						<h1 className="col-12 text-center text-white bg-primary p-5">CONTACT PAGE FAM</h1>
					</MainLayout>
				</>
			);
		} else {
			return <h1 className="text-center">404 Not Found!</h1>;
		}
	}
}

export default App;
