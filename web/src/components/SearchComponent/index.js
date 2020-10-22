import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SearchBar } from './styled';
import search from '../../assets/search.svg';

export default function SearchComponent({ noSearch }) {
  const history = useHistory();
  const [param, setParam] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/search/${param}`);
  };

  return (
    <SearchBar onSubmit={handleSubmit} noSearch={noSearch}>
      <input
        required
        pattern="[A-Za-z]{1,20}"
        title="Formato não aceito"
        type="text"
        id="searchBar"
        onChange={e => setParam(e.target.value)}
        placeholder="Search for items, brands and inspirations"
      />
      <button type="submit">
        <img src={search} alt="search" />
      </button>
    </SearchBar>
  );
}
