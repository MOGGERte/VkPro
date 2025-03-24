import s from './styles.module.css';
import PropTypes from 'prop-types';

export const PostComments = ({ comments }) => {
  return (
    <div className={s.commentsContainer}>
      {comments.map((comment) => (
        <div key={comment.id} className={s.comment}>
          <div className={s.commentText}>
            <div>{comment.text}</div>
            {comment.customer?.avatar && <img className={s.avatar} src={comment.customer.avatar} />}
            <div>{comment.createdAt}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

PostComments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      customer: PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        surName: PropTypes.string.isRequired
      }),
      createdAt: PropTypes.string.isRequired
    })
  ).isRequired
};
