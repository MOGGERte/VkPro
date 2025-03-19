import s from './styles.module.css';
import { Post } from '../../Post/Post.jsx';

export const ProfilePosts = ({ userPost, customer }) => {
  return (
    <div className={s.posts}>
      {userPost.map((post) => (
        <div key={post.id}>
          <Post
            customerId={post.customerId}
            customer={customer}
            photoUrl={post.photoUrl}
            text={post.text}
            likesCounter={post.likesCounter}
            commentsCounter={post.commentsCounter}
            repostsCounter={post.repostsCounter}
          />
        </div>
      ))}
    </div>
  );
};
