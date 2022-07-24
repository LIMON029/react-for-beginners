import React from "react";
import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // async 안 쓴 버전
  // useEffect(()=> {
  //   fetch(`https://yts.mx/api/v2/list_movies.jsonminimum_rating=8.5&sort_by=year`)
  //   .then((response) => response.json())
  //   .then((json)=> setMovies(json.data.movies));
  //   setLoading(false);
  // }, []);

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(()=> {getMovies();}, []);
  
  return (
    <div>
      {loading
        ? <h1>Loading....</h1>
        : <div>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                genres={movie.genres}
                />
            ))}
          </div>
      }
    </div>
  );
}

export default Home;
