import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops, this page does not exist.</p>
      <Link to="/">Back to the home page</Link>
    </main>
  );
};

export default NotFoundPage;
