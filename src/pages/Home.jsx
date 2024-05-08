import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = ({ handleFetching }) => {
  const [results, setResults] = useState([]);
  // fetch(
  //   'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
  //   options
  // )
  //   .then(response => response.json())
  //   .then(response => console.log(response.results))
  //   .catch(err => console.error(err));

  // useEffect =
  //   (() => {
  //     handleFetching(
  //       'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
  //     );
  //   },
  //   []);

  // ----------

  // handleFetching(
  //   'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
  // );

  useEffect(() => {
    handleFetching(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
    )
      .then(fetchedResults => {
        setResults(fetchedResults);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {results.map(result => (
          <li key={result.id}>
            <Link to={`/movie/${result.id}`}>{result.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
