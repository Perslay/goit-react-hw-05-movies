import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Movies = ({ handleFetching }) => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const showResults = async (search, pageNum) => {
    try {
      const data = await handleFetching(
        `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=${pageNum}`
      );
      setSearchResults(data.results);
      setSubmitted(true);
      navigate(`/movies`, { replace: true });
    } catch (error) {
      setError(true);
    }
  };

  const handleBack = () => {
    if (pageNum === 1) return;

    const updatedPageNum = pageNum - 1;
    setPageNum(updatedPageNum);
    showResults(search, updatedPageNum);
  };

  const handleNext = () => {
    const updatedPageNum = pageNum + 1;
    setPageNum(updatedPageNum);
    showResults(search, updatedPageNum);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const form = event.currentTarget;
    const search = form.elements.search.value;

    setSearch(search);
    setPageNum(1);
    await showResults(search, 1);

    form.reset();
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      {submitted &&
        searchResults &&
        (searchResults.length > 0 ? (
          <div>
            <ul>
              {searchResults.map(result => (
                <li key={result.id}>
                  <Link to={`/movies/${result.id}`}>{result.title}</Link>
                </li>
              ))}
            </ul>
            <button onClick={handleBack} type="button">
              Back
            </button>
            <button onClick={handleNext} type="button">
              Next
            </button>
          </div>
        ) : (
          <p>There are no matching results.</p>
        ))}
      {(error || !searchResults) && (
        <p>Error: Failed to get information from the server.</p>
      )}
    </main>
  );
};

Movies.propTypes = {
  handleFetching: PropTypes.func.isRequired,
};
