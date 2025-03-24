import s from './styles.module.css';
import PropTypes from 'prop-types';

export const PostContent = ({ photoUrl, text }) => {
  return (
    <div className={s.postContainer}>
      {photoUrl && <img className={s.photo} src={photoUrl} />}
      <div className={s.text}>{text}</div>
    </div>
  );
};

PostContent.propTypes = {
  photoUrl: PropTypes.string,
  text: PropTypes.string
};
