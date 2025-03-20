import s from './styles.module.css';
import { FaRegCommentAlt, FaRegHeart } from 'react-icons/fa';
import { MdOutlineReply } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getPostWithComments, updatePostLike } from '../../api/posts/requests';

export const Post = ({ postId }) => {
  const [postData, setPostData] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isLikeLoading, setIsLikeLoading] = useState(false);

  const nav = useNavigate();

  useEffect(() => {
    const fetchPostData = async () => {
      const post = await getPostWithComments(postId);
      console.log('Полученные данные поста:', post);
      setPostData(post);
      setLikes(post.likesCounter || 0);
      setIsLiked(post.likedInfo?.includes(0) || false);
    };

    fetchPostData();
  }, [postId]);

  const onProfileClick = (customerId) => {
    console.log(`Профиль пользователя с id ${customerId}`);
    nav(`/profile/${customerId}`);
  };

  const onLikeClick = async () => {
    setIsLiked((isLiked) => {
      const newState = !isLiked;
      console.log(`${newState ? 'Поставил' : 'Убрал'} лайк на пост с id ${postId}`);

      setLikes((prev) => (newState ? prev + 1 : prev - 1));
      setIsLikeLoading(true);
      updatePostLike(postId, newState, 0).finally(() => {
        setIsLikeLoading(false);
      }); // вместо 0 загрузка айди пользователя

      return !isLiked;
    });
  };

  if (!postData) return <div>Загрузка...</div>; //Временно
  console.log(postData.customer);
  return (
    <div className={s.post} id={`id-${postData.id}`}>
      <div className={s.customerContainer}>
        {postData.customer && ( // Check post custom
          <div className={s.cont} onClick={() => onProfileClick(postData.customer.id)}>
            <img className={s.avatar} src={postData.customer.avatar} />
            <div className={s.name}>{postData.customer.name}</div>
          </div>
        )}
      </div>

      <div className={s.postContainer}>
        <img className={s.photo} src={postData.photoUrl} />
        <div className={s.text}>{postData.text}</div>
      </div>

      <div className={s.footerContainer}>
        <button
          disabled={isLikeLoading}
          onClick={onLikeClick}
          className={`${s.footerCounterItem} ${s.likesCounter}`}
        >
          <FaRegHeart size={16} color={isLiked ? '#ef2626' : '#767676'} />
          {likes}
        </button>

        <div className={s.footerCounterItem}>
          <FaRegCommentAlt size={16} />
          {postData.comments.length}
        </div>

        <div className={s.footerCounterItem}>
          <MdOutlineReply size={16} />
          {postData.repostsCounter}
        </div>
      </div>

      <div className={s.commentsContainer}>
        {postData.comments.map((comment) => (
          <div key={comment.id} className={s.comment}>
            <div className={s.commentText}>
              <div>{comment.text}</div>
              <div className={s.imageCont}>
                <img src={comment.customer?.avatar} />
              </div>
              <div>{comment.createdAt}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
