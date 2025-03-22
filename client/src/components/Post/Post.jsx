import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { updatePostLike, getPostWithComments } from '../../api/posts/requests';
import { PostHeader } from './PostHeader/PostHeader.jsx';
import { PostContent } from './PostContent/PostContent.jsx';
import { PostFooter } from './PostFooter/PostFooter.jsx';
import { PostComments } from './PostComments/PostComments.jsx';
import s from './styles.module.css';

export const Post = ({ postId }) => {
  const [postData, setPostData] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const nav = useNavigate();

  useEffect(() => {
    const fetchPostData = async () => {
      const post = await getPostWithComments(postId);
      setPostData(post);
      setLikes(post.likesCounter || 0);
      setIsLiked(post.likedInfo?.includes(0) || false);
    };

    fetchPostData();
  }, [postId]);

  const onProfileClick = (customerId) => {
    nav(`/profile/${customerId}`);
  };

  const onLikeClick = async () => {
    const newState = !isLiked;
    setIsLiked(newState);
    setLikes((prev) => (newState ? prev + 1 : prev - 1));
    updatePostLike(postId, newState, 0);
  };

  if (!postData) return <div>Загрузка...</div>;

  return (
    <div className={s.post}>
      <PostHeader customer={postData.customer} onProfileClick={onProfileClick} />
      <PostContent photoUrl={postData.photoUrl} text={postData.text} />
      <PostFooter
        likes={likes}
        isLiked={isLiked}
        onLikeClick={onLikeClick}
        commentsCount={postData.comments.length}
        repostsCount={postData.repostsCounter}
      />
      <PostComments comments={postData.comments} />
    </div>
  );
};
