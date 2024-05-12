import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
      <h1>Trending today</h1>
      {(error || !results) && (
        <p>Error: Failed to get information from the server.</p>
      )}
      {results && (
        <div>
          {results.length > 0 && (
            <ul>
              {results.map(result => (
                <li key={result.id}>
                  <Link to={`/movies/${result.id}`}>{result.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </main>
  );
};

Home.propTypes = {
  handleFetching: PropTypes.func.isRequired,
};
