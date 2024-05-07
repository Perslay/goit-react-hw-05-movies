import { Outlet } from 'react-router-dom';
import { NLink } from './App.styled';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NLink to="/" end>
            Home
          </NLink>
          <NLink to="/movies">Movies</NLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
