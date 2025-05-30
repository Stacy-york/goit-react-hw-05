import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../api/tmdb';
import MovieList from '../components/MovieList';
import css from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const results = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.error('Error loading movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <main className={css.main}>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default HomePage;