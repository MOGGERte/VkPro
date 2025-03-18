import s from './styles.module.css';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegCommentAlt } from 'react-icons/fa';
import { MdOutlineReply } from 'react-icons/md';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export const Post = ({
  customer,
  customerId,
  photoUrl,
  text,
  likesCounter,
  commentsCounter,
  repostsCounter
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const likes = isLiked ? likesCounter + 1 : likesCounter;
  const nav = useNavigate();
  const onProfileClick = (customerId) => {
    console.log(`Профиль пользователя с id ${customerId}`);
    nav(`/profile/${customerId}`);
  };

  if (!customer) {
    return null;
  }

  return (
    <div>
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
        <div
          onClick={() => setIsLiked((prev) => !prev)}
          className={`${s.footerCounterItem} ${s.likesCounter}`}
        >
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
