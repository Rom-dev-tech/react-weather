import { useState } from 'react';
import PropTypes from 'prop-types';
import style from 'components/SearchBar/SearchBar.module.scss';

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
    <form className={style.searchform} onSubmit={handleSubmit}>
      <button type="submit" className={style.searchformButton}>
        <span className={style.searchformButtonLabel}>Search</span>
      </button>

      <input
        className={style.searchformInput}
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
