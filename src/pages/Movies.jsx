import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

export const Movies = ({ handleFetching }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  // const id = searchParams.get('id');

  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();

    const form = event.currentTarget;
    const search = form.elements.search.value;
    // setSearchParams({ name: search });

    handleFetching(
      `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`
    )
      .then(data => {
        setSearchResults(data.results);
        console.log(data.results);
      })
      .then(() => {
        setSubmitted(true);
        navigate(`/movies`, { replace: true });
      })
      .catch(error => {
        console.log(error);
      });

    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      {submitted && searchResults && (
        <ul>
          {searchResults.map(result => (
            <li key={result.id}>
              <Link to={`/movies/${result.id}`}>{result.title}</Link>
            </li>
          ))}
        </ul>
      )}
      {/* {!isLoading &&
        (!searchResults || searchResults.length === 0) &&
        searchQuery !== '' && <p>No results found for "{searchQuery}"</p>} */}
    </div>
  );
};