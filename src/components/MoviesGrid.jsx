import { MovieCard } from './MovieCard'
import styles from './css_modules/MoviesGrid.module.css'
import { useState, useEffect } from 'react';
import { get } from '../utils/httpClient';

export function MoviesGrid() {
  const [movies, setMovies] = useState([])
  
  useEffect(() => [
    get("/discover/movie").then((data) => {
      setMovies(data.results)
    })
  ], []);

  return (
    <ul className={styles.movies_list}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  )
}

// api key: 57537ff19f381dd7b67eee1ea8b8164a
// api token: eyJh
/* 
const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}

*/ 