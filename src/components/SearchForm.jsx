import { useState } from 'react';
import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Enter a search word');
      return;
    }
    onSubmit(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        id="search"
        value={query}
        onChange={handleChange}
        placeholder="Search movies"
        autoFocus
        className={css.input}
      />
      <button type="submit" className={css.button}>Search</button>
    </form>
  );
};

export default SearchForm;