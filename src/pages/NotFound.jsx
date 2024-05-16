import css from '../pages-styles/NotFound.module.css';

const NotFound = () => {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h2 className={css.heading}>Error 404</h2>
        <p>Page not found</p>
      </div>
    </main>
  );
};

export default NotFound;
