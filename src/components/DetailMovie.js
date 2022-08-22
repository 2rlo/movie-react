import PropTypes from "prop-types";

function DetailMovie({ medium_cover_image, title, description_full, genres, rating, runtime}) {
    return (
        <div>
            <img src={medium_cover_image} alt={title} />
            <h2>
                {title}</h2>
            <p>{description_full}</p>
            <p>rating: {rating} </p>
            <p>runtime: {runtime}</p>
            <ul>
                {genres.map(g => <li key={g}>{g}</li>)}
            </ul>
        </div>
    );
}

DetailMovie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description_full: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default DetailMovie;