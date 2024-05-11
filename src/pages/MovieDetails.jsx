import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import css from '../pages-styles/MovieDetails.module.css';

export const MovieDetails = ({ handleFetching }) => {
  const [results, setResults] = useState([]);
  const { movieId } = useParams();

  const navigate = useNavigate();

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

  const handleClick = async values => {
    navigate('/');
  };

  return (
    <div>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="200"
                fill="white"
              >
                <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" />
              </svg>
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
    </div>
  );
};
