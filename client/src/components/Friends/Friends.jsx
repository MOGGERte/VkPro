import { getFriends } from '../../api/friends/requests.js';
import s from './styles.module.css';
import { useEffect, useState } from 'react';
import { FriendItem } from '../FriendsItem/FriendsItem.jsx';
import { Link } from 'react-router';
import { Loading } from '../LoadingPage';

export const Friends = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getFriends().then((value) => {
      setIsLoading(false);
      setFriends(value);
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className={s.friendsContainer}>
      {friends.map((friendItem) => {
        return (
          <Link to={`/profile/${friendItem.id}`} key={friendItem.id} className={s.friendLink}>
            <FriendItem customer={friendItem.customer} isOnline={friendItem.isOnline} />
          </Link>
        );
      })}
    </div>
  );
};
