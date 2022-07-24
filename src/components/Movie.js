import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImg, title, genres}) {
    return (
        <div>
            <img src={coverImg} alt="cover img"/>
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <ul>
                {
                    genres ? genres.map((g) => (<li key={g}>{g}</li>)) : null
                }
            </ul>
        </div>
    );
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
};

export default Movie;