import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { NotFound } from '../pages/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
