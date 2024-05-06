import { Link, Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();

  return (
    <div>
      <div>
        <p>Movie with id - {movieId}</p>
        <img alt="img details" />
        <h2>Title</h2>
        <p>User Score:</p>
        <h3>Overview</h3>
        <p>Overview...</p>
        <h4>Genres</h4>
        <p>Genres...</p>
      </div>
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
