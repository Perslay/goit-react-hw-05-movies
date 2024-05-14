import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NLink = styled(NavLink)`
  background-color: #222;
  border-radius: 100px;
  color: #eee;
  display: inline-block;
  font-weight: 500;
  padding: 1rem 2rem;
  text-decoration: none;
  transition: box-shadow 250ms ease;

  &:hover,
  &:focus {
    box-shadow: 0 0 7px #eee;
    outline: none;
  }

  &.active {
    background-color: #d53;
  }
`;
