import React from 'react';
import {Link} from 'react-router-dom';

class AlbumDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			album: {}
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch(`https://student-fun-api.herokuapp.com/api/hiphop/${this.props.match.params.albumid}`);
			let album = await r.json();
			this.setState({ album });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const { title, artist, image } = this.state.album;

		return (
			<section className="row my-2 justify-content-center">
				<article className="col-md-8">
					<div className="card shadow">
						<img src={image} alt="album art" className="card-img-top" />
						<div className="card-body text-center">
							<h4 className="card-title">{title}</h4>
							<p className="card-text">by {artist}</p>
                            <Link to="/" className="btn btn-secondary btn-block w-75 mx-auto shadow">Go Back</Link>
						</div>
					</div>
				</article>
			</section>
		);
	}
}

export default AlbumDetails;
