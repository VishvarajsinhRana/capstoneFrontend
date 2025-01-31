import React from 'react'
import { useNavigate } from 'react-router-dom';
import './BodySection.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const history = useNavigate();
  const onSubmit = (e) => {
      history.push(`?s=${searchQuery}`);
      e.preventDefault();
  };

  return (
    <form
        action="/"
        method="get"
        autoComplete="off"
        onSubmit={onSubmit}
    >
        <label htmlFor="header-search">
            <span>
                Where To?
            </span>
        </label>
        <input
            value={searchQuery}
            onInput={(e) => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="City, Restaurants..."
            name="s"
        />
        <button type="submit">Search</button>
    </form>
    );
};

export default SearchBar;