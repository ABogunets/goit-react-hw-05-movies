import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.div`
  padding-left: 20px;
`;

export const AddInformation = styled.div`
  padding: 20px 0px;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;

export const LinkBack = styled(NavLink)`
  padding: 3px 8px;
  border-radius: 4px;

  background-color: LightGray;
  text-decoration: none;

  &:hover {
    color: orangered;
  }
`;

export const Link = styled(NavLink)``;
