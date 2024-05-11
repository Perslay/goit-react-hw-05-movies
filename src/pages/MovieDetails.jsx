import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import css from '../pages-styles/MovieDetails.module.css';
import movie from '../img/movie.svg';

export const MovieDetails = ({ handleFetching }) => {
  const [results, setResults] = useState([]);
  const { movieId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    handleFetching(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
    )
      .then(data => {
        console.log(data);
        setResults(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [handleFetching, movieId]);

  const handleClick = () => {
    navigate('/');
  };

  return (
    <main>
      <button onClick={handleClick} type="button">
        Go back
      </button>
      {results && (
        <div>
          {results.poster_path ? (
            <img
              className={css.poster}
              src={`https://image.tmdb.org/t/p/w342${results.poster_path}`}
              alt={results.title}
            />
          ) : (
            <div className={css.movieBg}>
              <img src={movie} width="200" alt="movie" />
            </div>
          )}
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
    </main>
  );
};
