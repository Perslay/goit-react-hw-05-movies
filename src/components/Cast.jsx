import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from '../components-styles/Cast.module.css';

export const Cast = ({ handleFetching }) => {
  const [results, setResults] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    handleFetching(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`
    )
      .then(data => data.cast.slice(0, 9))
      .then(data => {
        console.log(data);
        setResults(data);
      });
  }, [handleFetching, movieId]);

  return (
    <div>
      {results && results.length > 0 ? (
        <ul>
          {results.map(result => (
            <li key={result.id}>
              <p>{result.name}</p>
              {result.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${result.profile_path}`}
                  alt={result.name}
                />
              ) : (
                <div className={css.avatarBg}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    viewBox="0 0 448 512"
                    fill="white"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No actors</p>
      )}
    </div>
  );
};
