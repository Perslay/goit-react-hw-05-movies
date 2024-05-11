import { Outlet } from 'react-router-dom';
import { NLink } from './App.styled';
import css from '../components-styles/SharedLayout.module.css';
import logo from '../img/logo.svg';

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
      <footer>
        <a href="https://developer.themoviedb.org/docs/getting-started">
          <img
            src={logo}
            alt="TMDB logo"
            width="100"
            title="The movie db - movie database"
          />
        </a>
        <p>
          This website uses TMDB and the TMDB APIs but is not endorsed,
          certified, or otherwise approved by TMDB.
        </p>
      </footer>
    </div>
  );
};
