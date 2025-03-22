import s from './styles.module.css';
import { FaRegCommentAlt, FaRegHeart } from 'react-icons/fa';
import { MdOutlineReply } from 'react-icons/md';
import { useState } from 'react';
import { updatePostLike } from '../../../api/posts/requests.js';

export const PostFooter = ({
  commentsCount,
  repostsCount,
  postId,
  defaultIsLiked,
  defaultLikes
}) => {
  const [isLiked, setIsLiked] = useState(defaultIsLiked);
  const [likes, setLikes] = useState(defaultLikes);

  const onLikeClick = async () => {
    const newState = !isLiked;
    setIsLiked(newState);
    setLikes((prev) => (newState ? prev + 1 : prev - 1));
    updatePostLike(postId, newState, 0);
  };

  return (
    <div className={s.footerContainer}>
      <div onClick={onLikeClick} className={`${s.footerCounterItem} ${isLiked ? s.liked : ''}`}>
        <FaRegHeart size={16} />
        {likes}
      </div>
      <div className={s.footerCounterItem}>
        <FaRegCommentAlt size={16} />
        {commentsCount}
      </div>
      <div className={s.footerCounterItem}>
        <MdOutlineReply size={16} />
        {repostsCount}
      </div>
    </div>
  );
};
