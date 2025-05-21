import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../api/tmdb';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response.data.results);
      } catch (error) {
        console.error('Error loading reviews:', error);
      }
    };

    getReviews();
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>There are no reviews for this movie yet.</p>;
  }

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id} style={{ marginBottom: '24px' }}>
          <p><strong>{author}</strong> writes:</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;