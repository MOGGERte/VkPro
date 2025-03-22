import s from './styles.module.css';

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
