import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import css from '../pages-styles/MovieDetails.module.css';
import movie from '../img/movie.svg';

export const MovieDetails = ({ handleFetching }) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    handleFetching(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
    )
      .then(data => setResults(data))
      .catch(() => setError(true));
  }, [handleFetching, movieId]);

  const handleClick = () => {
    navigate('/');
  };

  return (
    <main>
      <div className={css.container}>
        <button className={css.button} onClick={handleClick} type="button">
          Back
        </button>
        {(error || !results) && (
          <p className={css.error}>
            Error: Failed to get information from the server.
          </p>
        )}
        {results && (
          <div className={css.smallContainer}>
            {results.poster_path ? (
              <img
                className={css.poster}
                src={`https://image.tmdb.org/t/p/w342${results.poster_path}`}
                alt={results.title}
              />
            ) : (
              <div className={css.movieBg}>
                <img className={css.icon} src={movie} width="200" alt="movie" />
              </div>
            )}
            <h2 className={css.secondHeading}>{results.title}</h2>
            <p>User Score: {results.vote_average}</p>
            <h3 className={css.thirdHeading}>Overview</h3>
            <p>{results.overview}</p>
            {results.genres && (
              <div>
                <h4 className={css.fourthHeading}>Genres</h4>
                <p>{results.genres.map(genre => genre.name).join(', ')}</p>
              </div>
            )}
          </div>
        )}
        <h4 className={css.fourthHeading}>Additional information</h4>
        <ul className={css.list}>
          <li>
            <Link className={css.link} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.link} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </main>
  );
};

MovieDetails.propTypes = {
  handleFetching: PropTypes.func.isRequired,
};
