import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <main>
      <h1>Trending today</h1>
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
    </main>
  );
};
