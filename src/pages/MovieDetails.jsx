import styles from '../components/css_modules/MovieDetails.module.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../utils/httpClient';
import { Spinner } from '../components/Spinner';

export function MovieDetails() {
  const { movieId } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    setIsLoading(true)

    get(`/movie/${movieId}`).then(data => {
      setMovie(data)
      setIsLoading(false)
    })
  }, [movieId])

  if (isLoading) {
    return ( <Spinner/> )
  }

  const imageURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <img src={imageURL} className={styles.movie_image} alt={movie.title}/>
      </div>
      <div className={`${styles.col} ${styles.movie_details}`}>
        <p className={styles.title}>
          <strong>Title:</strong> {movie.title} ({movie.release_date.slice(0, 4)})
        </p>
        <p className={styles.description} alt={movie.overview}>
          <strong>Description:</strong> {movie.overview}
        </p>
        <p className={styles.genres} alt="">
          <strong>Genres:</strong>{" "}
          {movie.genres.map(genre => genre.name).join(", ")}
        </p>
        <p className={styles.rating} alt="rating">{movie.vote_average}</p>
      </div>
    </div>
  )
}