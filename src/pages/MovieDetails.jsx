import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export const MovieDetails = ({ handleFetching }) => {
  const [results, setResults] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    handleFetching(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
    )
      .then(results => {
        console.log(results);
        setResults(results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [handleFetching, movieId]);

  return (
    <div>
      {results && (
        <div>
          <img src={results.poster_path} alt={results.title} />
          <h2>{results.title}</h2>
          <p>User Score: {results.vote_average}</p>
          <h3>Overview</h3>
          <p>{results.overview}</p>
          {results.genres && (
            <div>
              <h4>Genres</h4>
              <p>{results.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          )}
        </div>
      )}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
