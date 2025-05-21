import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../api/tmdb';

const Cast = () => {
  const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    
    const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";


  useEffect(() => {
    const getCast = async () => {
      try {
        const response = await fetchMovieCast(movieId);
        setCast(response.data.cast);
      } catch (error) {
        console.error('Error loading the cast:', error);
      }
    };

    getCast();
  }, [movieId]);

  if (cast.length === 0) {
    return <p>No information about the actors is available.</p>;
  }

  return (
    <ul>
      {cast.map(({ cast_id, name, character, profile_path }) => (
        <li key={cast_id} style={{ marginBottom: '16px' }}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : defaultImg
            }
            alt={name}
            width="100"
          />
          <p><strong>{name}</strong></p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;