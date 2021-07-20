import { Link } from 'react-router-dom'
import styles from './css_modules/MovieCard.module.css'

export function MovieCard({movie}) {
  const imageURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  return (
    <li className={styles.movie_card}>
      <Link to={`/movies/${movie.id}`}>
        <img src={imageURL} className={styles.movie_image} alt={movie.title} />
      </Link>
      <Link to={`/movies/${movie.id}`}>
        <div className={styles.title}>{movie.title}</div>
      </Link>
      <div className="rating_section">
        <div className={styles.rating} alt="rating">{movie.vote_average}</div>
      </div>
    </li>
  )
}