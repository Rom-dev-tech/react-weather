import { useState } from 'react';
import PropTypes from 'prop-types';
import s from '../SearchBar/SearchBar.module.scss';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (event) => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query.trim() === '') {
      alert('Empty request :)');
      return;
    }

    onSubmit(query);

    setQuery('');
  };

  return (
    <form className={s.searchform} onSubmit={handleSubmit}>
      <button type="submit" className={s.searchformButton}>
        <span className={s.searchformButtonLabel}>Search</span>
      </button>

      <input
        className={s.searchformInput}
        type="text"
        value={query}
        onChange={handleSearchChange}
        autoComplete="off"
        autoFocus
        placeholder="Enter the city..."
      />
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
