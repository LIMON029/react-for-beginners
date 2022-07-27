import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../css/Detail.css"

function MovieDetail({url, year, rating, coverImg, title, summary, genres}) {
    let summaryText = summary;
    if(summaryText.length > 1034) {
        summaryText = summaryText.substring(0, 1030) + "...";
    }
    return (
        <div className='detailContainer'>
            <div className="imgContainer">
                <img className="coverImg" src={coverImg} alt="cover img"/>
                <a href={url} className="btnGoSite">Go To Site</a>
            </div>
            <div className="detailInfo">
                <h2 className="detailTitle">{title}</h2>
                <ul className="detailGenres detail">
                    {
                        genres ? genres.map((g) => (<li className="detailGenre" key={g}>{g}</li>)) : null
                    }
                </ul>
                <p className="detailYear detail">{year}</p>
                <p className="detailRating detail"><FontAwesomeIcon icon={faStar} className="ratingStar"/>{rating}</p>
                <p className="detailSummary">{summaryText}</p>
            </div>
        </div>
    );
};

MovieDetail.propTypes = {
    url: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired
};

export default MovieDetail;