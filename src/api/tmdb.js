import axios from 'axios';

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzljYzU3OTJlNjM2YzI5NTgyNDMyZDg3ODQyOWJkOCIsIm5iZiI6MTc0NzY3MDc1MS4yNDE5OTk5LCJzdWIiOiI2ODJiNTZkZjdkNWNmYmU5NmIwYmQ5OGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RyErTG4HDXPQ4HuxAw2ywo6ufwb8YD9WWKOiOciAz60';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  }
});

export const fetchTrendingMovies = async () => {
    const response = await instance.get('/trending/movie/day');
    return response.data.results;
};

export const searchMovies = query =>
  instance.get(`/search/movie`, {
    params: { query, include_adult: false, language: 'en-US', page: 1 }
  });

export const fetchMovieDetails = id =>
  instance.get(`/movie/${id}`);

export const fetchMovieCast = id =>
  instance.get(`/movie/${id}/credits`);

export const fetchMovieReviews = id =>
  instance.get(`/movie/${id}/reviews`);