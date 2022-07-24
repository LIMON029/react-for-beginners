import React from "react";
import PropTypes from "prop-types";

function MovieDetail({coverImg, title, summary, genres}) {
    return (
        <div>
            <img src={coverImg} alt="cover img"/>
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {
                    genres ? genres.map((g) => (<li key={g}>{g}</li>)) : null
                }
            </ul>
        </div>
    );
};

MovieDetail.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
};

export default MovieDetail;