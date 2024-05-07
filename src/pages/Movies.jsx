import { Link, useNavigate, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTQyNWIwYjU2OGVjY2JlZDg4ODRmYWNjNDY5ZjZlMSIsInN1YiI6IjY2M2EyMjcyNWE0NjkwMDEyNTNmNDUwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uC7HJkDwjXG2-2avPv7dsq3GhNDhIi4XR4zstIkI97M',
    },
  };

  const api =
    'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

  const handleSubmit = async event => {
    event.preventDefault();

    const form = event.currentTarget;
    const search = form.elements.search.value;
    setSearchParams({ name: search });

    try {
      const response = await fetch(api, options);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      navigate('/movies', { replace: true });
    } catch (error) {
      console.log(error);
    }

    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
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
    </div>
  );
};
