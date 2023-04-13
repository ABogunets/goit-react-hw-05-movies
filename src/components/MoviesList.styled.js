import styled from 'styled-components';

export const Container = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px; */
  padding-left: 20px;
`;

export const CardWrapper = styled.li`
  /* border: 1px solid black;
  border-radius: 4px; */

  /* color: black; */
  > a {
    /* text-decoration: none; */
  }
`;

export const MovieName = styled.p`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  /* color: black; */
`;
