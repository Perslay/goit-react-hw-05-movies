import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = ({ handleFetching }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    handleFetching(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
    )
      .then(data => data.results)
      .then(data => setResults(data))
      .catch(error => {
        console.log(error);
      });
  }, [handleFetching]);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {results.map(result => (
          <li key={result.id}>
            <Link to={`/movies/${result.id}`}>{result.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
