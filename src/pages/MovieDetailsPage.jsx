import { useEffect, useRef, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../api/tmdb';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

    const [movie, setMovie] = useState(null);
    
    const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";


  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetchMovieDetails(movieId);
        setMovie(response.data);
      } catch (error) {
        console.error('Помилка завантаження деталей фільму:', error);
      }
    };

    getMovie();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  const { title, poster_path, vote_average, overview, genres } = movie;

  return (
    <main className={css.container}>
      <Link to={backLinkRef.current} className={css.backLink}>← Go back</Link>
      <div className={css.movieWrapper}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : defaultImg
          }
          alt={title}
          width="300"
          className={css.poster}
        />
        <div className={css.details}>
          <h2>{title}</h2>
          <p>User score: {vote_average.toFixed(1)}</p>
          <h3 className={css.sectionTitle}>Overview</h3>
          <p>{overview}</p>
          <h3 className={css.sectionTitle}>Genres</h3>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>

      <hr />
       <div className={css.additionalInfo}>
        <h3 className={css.sectionTitle}>Additional information</h3>
        <ul className={css.links}>
          <li className={css.linkItem}>
            <Link to="cast" state={{ from: backLinkRef.current }}>Cast</Link>
          </li>
          <li className={css.linkItem}>
            <Link to="reviews" state={{ from: backLinkRef.current }}>Reviews</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Outlet />
    </main>
  );
};

export default MovieDetailsPage;