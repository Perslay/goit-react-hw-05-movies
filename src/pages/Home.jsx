import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from '../pages-styles/Home.module.css';

export const Home = ({ handleFetching }) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    handleFetching(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
    )
      .then(data => data.results)
      .then(data => setResults(data))
      .catch(() => setError(true));
  }, [handleFetching]);

  return (
    <main>
      <div className={css.container}>
        <h2 className={css.secondHeading}>Trending today</h2>
        {(error || !results) && (
          <p className={css.error}>
            Error: Failed to get information from the server.
          </p>
        )}
        {results && (
          <div>
            {results.length > 0 && (
              <ul className={css.list}>
                {results.map(result => (
                  <li key={result.id}>
                    <Link className={css.link} to={`/movies/${result.id}`}>
                      {result.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

Home.propTypes = {
  handleFetching: PropTypes.func.isRequired,
};
