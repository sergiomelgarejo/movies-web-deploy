import movies from '../movies.json'
import { MovieCard } from './MovieCard'
import styles from '../css_modules/MoviesGrid.module.css'

export function MoviesGrid() {
  return (
    <ul className={styles.movies_list}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  )
}