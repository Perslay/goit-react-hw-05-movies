import { Outlet } from 'react-router-dom';
import { Link } from './App.styled';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
