import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Image = styled.img`
  width: 100px;
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const List = styled.ul`
  padding-left: 20px;
  font-size: 14px;
`;
export const LinkBack = styled(NavLink)`
  padding: 5px 8px;
  border-radius: 4px;
  background-color: WhiteSmoke;
  text-decoration: none;
  color: orangered;
`;
