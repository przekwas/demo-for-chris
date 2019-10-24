import React from 'react';

const AlbumCard = props => {
	const { title, artist, url, image, thumbnail_image } = props.album;
	return (
		<article className="col-md-4">
			<div className="card m-1 shadow">
				<img src={image} className="card-img-top" alt="album art" />
				<div className="card-body text-center">
					<div className="d-flex justify-content-around align-items-center">
						<img src={thumbnail_image} alt="artist art" className="w-25 h-25 border rounded-circle" />
						<h4 className="card-title">{title}</h4>
					</div>
					<p className="card-text">by {artist}</p>
					<a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-info btn-block w-75 mx-auto shadow mt-3">
						Buy on Amazon
					</a>
				</div>
			</div>
		</article>
	);
};

export default AlbumCard;
