import { Link, useNavigate, useSearchParams } from 'react-router-dom';

export const Movies = ({ handleFetching }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const id = searchParams.get('id');

  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();

    const form = event.currentTarget;
    const search = form.elements.search.value;
    setSearchParams({ name: search });

    handleFetching(
      'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'
    )
      .then(results => {
        return results.data;
      })
      .catch(error => {
        console.log(error);
      });

    // try {
    //   const response = await fetch(api, options);
    //   const jsonResponse = await response.json();
    //   console.log(jsonResponse);
    //   navigate('/movies', { replace: true });
    // } catch (error) {
    //   console.log(error);
    // }

    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      {/* <ul>
        <li>
          <Link to="movie1">Movie 1</Link>
        </li>
        <li>
          <Link to="movie2">Movie 2</Link>
        </li>
        <li>
          <Link to="movie3">Movie 3</Link>
        </li>
      </ul> */}
      {/* <p>Id: {id}</p> */}
    </div>
  );
};
