import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			albums: []
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('https://student-fun-api.herokuapp.com/api/hiphop');
			let albums = await r.json();
			this.setState({ albums });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<section className="row my-2 justify-content-center">
				<article className="col-md-8">
					<ul className="list-group">
						{this.state.albums.map(album => {
							return (
								<li key={`album-${album.id}`} className="d-flex justify-content-between align-items-center list-group-item">
									{album.title}
									<Link to={`/details/${album.id}`} className="btn btn-info shadow">Details</Link>
								</li>
							);
						})}
					</ul>
				</article>
			</section>
		);
	}
}

export default HomePage;
