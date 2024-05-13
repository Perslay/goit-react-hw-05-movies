import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from '../components-styles/Reviews.module.css';

export const Reviews = ({ handleFetching }) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    handleFetching(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`
    )
      .then(data => data.results.slice(0, 10))
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
            <li key={result.id}>
              <p className={css.nick}>{result.author}</p>
              <p>{result.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

Reviews.propTypes = {
  handleFetching: PropTypes.func.isRequired,
};
