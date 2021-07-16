import styles from '../css_modules/MovieCard.module.css'

export function MovieCard({movie}) {
  const imageURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  return (
    <li className={styles.movie_card}>
      <img src={imageURL} className={styles.movie_image} alt={movie.title} />
      <div className={styles.title}>{movie.title}</div>
      <div className="rating_section">
        <div className={styles.rating} alt="rating">{movie.vote_average}</div>
      </div>
    </li>
  )
}