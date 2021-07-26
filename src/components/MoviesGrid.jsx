import { MovieCard } from './MovieCard'
import styles from './css_modules/MoviesGrid.module.css'
import { useState, useEffect } from 'react';
import { get } from '../utils/httpClient';
import { Spinner } from './Spinner';
import { useQuery } from '../hooks/useQuery'

export function MoviesGrid() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const query = useQuery()
  const search = query.get("search")

  useEffect(() => {
    setIsLoading(true)

    const searchURL = search 
      ? `/search/movie?query=${search}`
      : "/discover/movie";

    get(searchURL).then((data) => {
      setMovies(data.results)
      setIsLoading(false)
    })
  }, [search]);

  if (isLoading) {
    return ( <Spinner /> )
  }

  return (
    <ul className={styles.movies_list}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  )
}