// import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import {
  SearchbarWrapper,
  SearchForm,
  SearchBtn,
  Input,
} from 'components/Searchbar/Searchbar.styled';

export const Searchbar = ({ setSearchParams }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const queryValue = e.target.elements.inputQuery.value;
    setSearchParams({ query: queryValue });
    if (queryValue.trim() === '') {
      toast.warning('Please enter something..');
      return;
    }
    e.target.elements.inputQuery.value = '';
  };

  return (
    <SearchbarWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="inputQuery"
          // value={searchQuery}
          autocomplete="off"
          autoFocus
          // placeholder="Search images and photos"
          // onChange={handleChange}
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </SearchForm>
    </SearchbarWrapper>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
