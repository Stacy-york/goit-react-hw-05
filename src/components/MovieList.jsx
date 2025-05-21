import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
    const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => (
        <li key={id} >
          <Link to={`/movies/${id}`} state={{ from: location }} className={css.item}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;