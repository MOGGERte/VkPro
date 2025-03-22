import s from './styles.module.css';

export const PostContent = ({ photoUrl, text }) => {
  return (
    <div className={s.postContainer}>
      {photoUrl && <img className={s.photo} src={photoUrl} />}
      <div className={s.text}>{text}</div>
    </div>
  );
};
