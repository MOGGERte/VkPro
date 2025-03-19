import s from './styles.module.css';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegCommentAlt } from 'react-icons/fa';
import { MdOutlineReply } from 'react-icons/md';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { updatePostLike } from '../../api/posts/requests';
import { useEffect } from 'react';

export const Post = ({
  postId,
  customer,
  customerId,
  photoUrl,
  text,
  likesCounter,
  commentsCounter,
  repostsCounter,
  likedInfo
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(likesCounter);

  const nav = useNavigate();

  const onProfileClick = (customerId) => {
    console.log(`Профиль пользователя с id ${customerId}`);
    nav(`/profile/${customerId}`);
  };

  const userId = 0; //сюда загружать айди пользователя с бека, после авторизации

  const onLikeClick = async () => {
    const newState = !isLiked;
    console.log(`${newState ? 'Поставил' : 'Убрал'} лайк на пост с id ${postId}`);
    setIsLiked(newState);
    console.log('обновил лайк');
    setLikes((prev) => (newState ? prev + 1 : prev - 1));
    updatePostLike(postId, newState, userId);
  };

  if (!customer) {
    return null;
  }
  useEffect(() => {
    console.log('likedInfo:', likedInfo);
    console.log('userId:', userId);
    if (likedInfo && likedInfo.includes(userId)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [likedInfo, userId]);

  return (
    <div className={s.post}>
      <div className={s.customerContainer}>
        <div className={s.cont} onClick={() => onProfileClick(customerId)}>
          <img className={s.avatar} src={customer.avatar} />
          <div className={s.name}>{customer.name}</div>
        </div>
      </div>

      <div className={s.postContainer}>
        <img className={s.photo} src={photoUrl} />
        <div className={s.text}>{text}</div>
      </div>

      <div className={s.footerContainer}>
        <div onClick={onLikeClick} className={`${s.footerCounterItem} ${s.likesCounter}`}>
          <FaRegHeart size={16} color={isLiked ? '#ef2626' : '#767676'} />
          {likes}
        </div>

        <div className={s.footerCounterItem}>
          <FaRegCommentAlt size={16} />
          {commentsCounter}
        </div>

        <div className={s.footerCounterItem}>
          <MdOutlineReply size={16} />
          {repostsCounter}
        </div>
      </div>
    </div>
  );
};
