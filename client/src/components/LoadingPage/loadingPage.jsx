import s from './styles.module.css';

export const Loading = () => {
  return (
    <div className={s.loadingContainer}>
      <div className={s.loading}>Loading...</div>
    </div>
  );
};
