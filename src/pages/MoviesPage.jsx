import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../api/tmdb';
import SearchForm from '../components/SearchForm';
import MovieList from '../components/MovieList';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      try {
        const response = await searchMovies(query);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Search for movies failed:', error);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSearchSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <main className={css.main}>
      <h1 className={css.title}>Search movies</h1>
      <SearchForm onSubmit={handleSearchSubmit} />
      {movies.length === 0 && query !== '' ? (
        <p className={css.noResults}>No movies found for "{query}"</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </main>
  );
};

export default MoviesPage;