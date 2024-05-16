import { RotatingLines } from 'react-loader-spinner';
import css from '../components-styles/Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.backdrop}>
      <RotatingLines
        className={css.spinner}
        visible={true}
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
