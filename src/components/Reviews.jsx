import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = ({ handleFetching }) => {
  const [results, setResults] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    handleFetching(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`
    )
      .then(data => data.results)
      .then(data => {
        console.log(data);
        setResults(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [handleFetching, movieId]);

  return (
    <div>
      {results && results.length > 0 ? (
        <ul>
          {results.map(result => (
            <li>{result.author}</li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};
