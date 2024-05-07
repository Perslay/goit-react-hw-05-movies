import { Link } from 'react-router-dom';

export const Home = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTQyNWIwYjU2OGVjY2JlZDg4ODRmYWNjNDY5ZjZlMSIsInN1YiI6IjY2M2EyMjcyNWE0NjkwMDEyNTNmNDUwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uC7HJkDwjXG2-2avPv7dsq3GhNDhIi4XR4zstIkI97M',
    },
  };

  fetch(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  )
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        <li>
          <Link to="movie1">Movie 1</Link>
        </li>
        <li>
          <Link to="movie2">Movie 2</Link>
        </li>
        <li>
          <Link to="movie3">Movie 3</Link>
        </li>
      </ul>
    </main>
  );
};
