import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NLink = styled(NavLink)`
  border-radius: 4px;
  color: #eee;
  display: inline-block;
  font-weight: 500;
  padding: 8px 16px;
  text-decoration: none;

  &.active {
    background-color: #d53;
  }
`;
