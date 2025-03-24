import s from './styles.module.css';
import { Post } from '../../Post/Post.jsx';
import PropTypes from 'prop-types';

export const ProfilePosts = ({ userPost, customer }) => {
  return (
    <div className={s.posts}>
      {userPost.map((post) => (
        <div key={post.id}>
          <Post
            postId={post.id}
            customer={customer}
            customerId={post.customerId}
            photoUrl={post.photoUrl}
            text={post.text}
            likesCounter={post.likesCounter}
            commentsCounter={post.commentsCounter}
            repostsCounter={post.repostsCounter}
            likedInfo={post.likedInfo}
          />
        </div>
      ))}
    </div>
  );
};

ProfilePosts.propTypes = {
  userPost: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      customerId: PropTypes.number.isRequired,
      photoUrl: PropTypes.string,
      text: PropTypes.string,
      likesCounter: PropTypes.number,
      commentsCounter: PropTypes.number,
      repostsCounter: PropTypes.number,
      likedInfo: PropTypes.array
    })
  ).isRequired,
  customer: PropTypes.object.isRequired
};
