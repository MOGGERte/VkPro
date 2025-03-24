import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getPostWithComments } from '../../api/posts/requests';
import { PostHeader } from './PostHeader/PostHeader.jsx';
import { PostContent } from './PostContent/PostContent.jsx';
import { PostFooter } from './PostFooter/PostFooter.jsx';
import { PostComments } from './PostComments/PostComments.jsx';
import s from './styles.module.css';
import PropTypes from 'prop-types';

export const Post = ({ postId }) => {
  const [postData, setPostData] = useState(null);

  const nav = useNavigate();

  useEffect(() => {
    const fetchPostData = async () => {
      const post = await getPostWithComments(postId);
      setPostData(post);
    };

    fetchPostData();
  }, [postId]);

  const onProfileClick = (customerId) => {
    nav(`/profile/${customerId}`);
  };

  if (!postData) return <div>Загрузка...</div>;

  return (
    <div className={s.post}>
      <PostHeader customer={postData.customer} onProfileClick={onProfileClick} />
      <PostContent photoUrl={postData.photoUrl} text={postData.text} />
      <PostFooter
        defaultLikes={postData.likesCounter}
        defaultIsLiked={postData.likedInfo?.includes(0)}
        commentsCount={postData.comments.length}
        repostsCount={postData.repostsCounter}
        postId={postId}
      />
      <PostComments comments={postData.comments} />
    </div>
  );
};

Post.propTypes = {
  postId: PropTypes.number.isRequired
};
