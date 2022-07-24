import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movieInfo, setMovieInfo] = useState([]);

    const getMovieInfo = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovieInfo(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {getMovieInfo();}, []);

    console.log(movieInfo);

    return (<div>
        {loading
            ? <h1>Loading....</h1>
            : <MovieDetail
                coverImg={movieInfo.medium_cover_image}
                title={movieInfo.title}
                summary={movieInfo.description_full}
                genres={movieInfo.genres} />
        }
    </div>);
}

export default Detail;