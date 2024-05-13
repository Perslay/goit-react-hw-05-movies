import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from '../components-styles/Cast.module.css';
import user from '../img/user.svg';

export const Cast = ({ handleFetching }) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    handleFetching(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`
    )
      .then(data => data.cast.slice(0, 12))
      .then(data => setResults(data))
      .catch(() => setError(true));
  }, [handleFetching, movieId]);

  return (
    <div>
      {(error || !results) && (
        <p className={css.error}>
          Error: Failed to get information from the server.
        </p>
      )}
      {results.length > 0 ? (
        <ul className={css.list}>
          {results.map(result => (
            <li className={css.listItem} key={result.id}>
              <p className={css.name}>{result.name}</p>
              {result.profile_path ? (
                <img
                  className={css.image}
                  src={`https://image.tmdb.org/t/p/w200/${result.profile_path}`}
                  alt={result.name}
                />
              ) : (
                <div className={css.avatarBg}>
                  <img src={user} alt={result.name} width="150" />
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.info}>Cast information unavailable.</p>
      )}
    </div>
  );
};

Cast.propTypes = {
  handleFetching: PropTypes.func.isRequired,
};
