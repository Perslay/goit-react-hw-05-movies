import {
  Link,
  // useNavigate
} from 'react-router-dom';

export const Movies = () => {
  // const navigate = useNavigate();

  // const handleSubmit = async values => {
  //   const response = await...(values);
  //   if (response.success) {
  //     navigate('/');
  //   }
  // }

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
