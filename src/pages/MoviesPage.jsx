import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../api/tmdb';
import SearchForm from '../components/SearchForm';
import MovieList from '../components/MovieList';

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
    <main>
      <h1>Search movies</h1>
      <SearchForm onSubmit={handleSearchSubmit} />
      <MovieList movies={movies} />
    </main>
  );
};

export default MoviesPage;