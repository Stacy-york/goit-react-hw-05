import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        value={query}
        onChange={handleChange}
        placeholder="Search movies"
        autoFocus
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;