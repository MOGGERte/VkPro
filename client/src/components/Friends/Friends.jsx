import { getFriends } from '../../api/friends/requests.js';
import s from './styles.module.css';
import { useEffect, useState } from 'react';
import { FriendItem } from '../FriendsItem/FriendsItem.jsx';
import { Link } from 'react-router';
import { Loading } from '../LoadingPage';

export const Friends = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [friends, setFriends] = useState([]);
  const [showOnline, setShowOnline] = useState(false); // добавьте это состояние

  useEffect(() => {
    setIsLoading(true);
    getFriends().then((value) => {
      setIsLoading(false);
      setFriends(value);
    });
  }, []);

  if (isLoading) return <Loading />;

  const filteredFriends = showOnline
    ? friends.filter(
        (friendItem) => friendItem.isOnline === 'pc' || friendItem.isOnline === 'phone'
      )
    : friends;

  const onlineFriendsCount = friends.filter(
    (friendItem) => friendItem.isOnline === 'pc' || friendItem.isOnline === 'phone'
  ).length;

  return (
    <div className={s.friendsContainer}>
      <div className={s.filterContainer}>
        <div
          className={`${s.allFriends} ${!showOnline ? s.active : ''}`}
          onClick={() => setShowOnline(false)}
        >
          Все друзья ({friends.length})
        </div>
        <div
          className={`${s.friendOnline} ${showOnline ? s.active : ''}`}
          onClick={() => setShowOnline(true)}
        >
          Друзья Онлайн ({onlineFriendsCount})
        </div>
      </div>
      {filteredFriends.map((friendItem) => {
        return (
          <Link to={`/profile/${friendItem.id}`} key={friendItem.id} className={s.friendLink}>
            <FriendItem customer={friendItem.customer} isOnline={friendItem.isOnline} />
          </Link>
        );
      })}
    </div>
  );
};
