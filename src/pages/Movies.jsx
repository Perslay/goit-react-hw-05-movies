import { Link } from 'react-router-dom';

export const Movies = () => {
  return (
    <div>
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
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
    </div>
  );
};
