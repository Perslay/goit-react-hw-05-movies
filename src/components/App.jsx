import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { NotFound } from '../pages/NotFound';

export const App = () => {
  const handleFetching = async api => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTQyNWIwYjU2OGVjY2JlZDg4ODRmYWNjNDY5ZjZlMSIsInN1YiI6IjY2M2EyMjcyNWE0NjkwMDEyNTNmNDUwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uC7HJkDwjXG2-2avPv7dsq3GhNDhIi4XR4zstIkI97M',
      },
    };

    // fetch(api, options)
    //   .then(response => response.json())
    //   .then(response => console.log(response.results))
    //   .then(response => {
    //     return response.results;
    //   })
    //   .catch(err => console.error(err));

    try {
      const response = await fetch(api, options);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect =
  //   (() => {
  //     handleFetching(
  //       'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
  //     );
  //   },
  //   []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home handleFetching={handleFetching} />} />
        <Route
          path="/movies"
          element={<Movies handleFetching={handleFetching} />}
        />
        <Route
          path="/movies/:movieId"
          element={<MovieDetails handleFetching={handleFetching} />}
        >
          <Route
            path="cast"
            element={<Cast handleFetching={handleFetching} />}
          />
          <Route
            path="reviews"
            element={<Reviews handleFetching={handleFetching} />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
