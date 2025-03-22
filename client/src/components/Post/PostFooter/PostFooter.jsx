import s from './styles.module.css';
import { FaRegHeart, FaRegCommentAlt } from 'react-icons/fa';
import { MdOutlineReply } from 'react-icons/md';

export const PostFooter = ({ likes, isLiked, onLikeClick, commentsCount, repostsCount }) => {
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
