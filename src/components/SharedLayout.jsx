import { Outlet } from 'react-router-dom';
import { NLink } from './App.styled';
import css from '../components-styles/SharedLayout.module.css';
import logo from '../img/logo.svg';

export const SharedLayout = () => {
  return (
    <div>
      <header className={css.header}>
        <div className={css.container}>
          <h1 className={css.firstHeading}>Movielib</h1>
          <nav className={css.navigation}>
            <NLink to="/" end>
              Home
            </NLink>
            <NLink to="/movies">Movies</NLink>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer className={css.footer}>
        <div className={css.footerContainer}>
          <a
            href="https://developer.themoviedb.org/docs/getting-started"
          >
            <img
              className={css.logoImage}
              src={logo}
              alt="TMDB logo"
              width="150"
              title="The movie db - movie database"
            />
          </a>
          <p
          >
            This website uses TMDB and the TMDB APIs but is not endorsed,
            certified, or otherwise approved by TMDB.
          </p>
        </div>
      </footer>
    </div>
  );
};
