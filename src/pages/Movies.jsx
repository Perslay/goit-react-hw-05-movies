import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Movies = ({ handleFetching }) => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const navigate = useNavigate();

  const showResults = async search => {
    try {
      const data = await handleFetching(
        `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=${pageNum}`
      );
      setSearchResults(data.results);
      console.log(data.results);
      setSubmitted(true);
      navigate(`/movies`, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = () => {
    setPageNum(prevPageNum => Math.max(prevPageNum - 1, 1)); // Ensure pageNum doesn't go below 1
    showResults(search);
  };

  const handleNext = () => {
    setPageNum(prevPageNum => prevPageNum + 1);
    showResults(search);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const form = event.currentTarget;
    const search = form.elements.search.value;

    setSearch(search);

    setPageNum(1);

    await showResults(search);

    form.reset();
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      {submitted &&
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
          <p>There are not matching results.</p>
        ))}
    </main>
  );
};

Movies.propTypes = {
  handleFetching: PropTypes.func.isRequired,
};
