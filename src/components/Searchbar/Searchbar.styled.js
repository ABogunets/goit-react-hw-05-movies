import styled from 'styled-components';

export const SearchbarWrapper = styled.header``;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

export const SearchBtn = styled.button`
  padding: 2px 5px;
  font: inherit;
  font-size: 20px;
  cursor: pointer;
`;

export const Input = styled.input`
  display: inline-block;
  z-index: 100;
  width: 100%;
  font: inherit;
  font-size: 20px;
  padding: 2px 4px;

  &:focus {
    border: none;
    outline: 3px solid SkyBlue;
  }
`;
