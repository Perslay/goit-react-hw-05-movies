import css from '../pages-styles/NotFound.module.css';

export const NotFound = () => {
  return (
    <main className={css.main}>
      <h2 className={css.heading}>Error 404</h2>
      <p className={css.paragraph}>Page not found</p>
    </main>
  );
};
