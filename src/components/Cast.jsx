import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from '../components-styles/Cast.module.css';
import user from '../img/user.svg';

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
                  <img src={user} alt="avatar" width="150" />
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
