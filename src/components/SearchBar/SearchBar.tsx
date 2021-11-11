import { useState } from 'react';
import style from '../SearchBar/SearchBar.module.scss';

type SearchBarProps = {
  onSubmit: (query: string) => void;
};

export const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
