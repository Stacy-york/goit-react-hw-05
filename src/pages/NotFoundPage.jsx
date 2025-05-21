import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
     <main className={css.main}>
      <h1 className={css.title}>404 - Page Not Found</h1>
      <p className={css.text}>Oops, this page does not exist.</p>
      <Link to="/" className={css.link}>
        Back to the home page
      </Link>
    </main>
  );
};

export default NotFoundPage;
