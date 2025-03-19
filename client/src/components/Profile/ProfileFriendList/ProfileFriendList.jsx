import s from './styles.module.css';
import { Link } from 'react-router';

export const ProfileFriendList = ({ otherProfiles, onFriendClick }) => {
  return (
    <div className={s.friendsListContainer}>
      <div className={s.contText}>
        <div className={s.frend} onClick={onFriendClick}>
          Друзья
        </div>
      </div>
      <div className={s.friendsList}>
        <div className={s.cont}>
          {otherProfiles.map((profile) => (
            <Link key={profile.id} to={`/profile/${profile.id}`} className={s.friendItem}>
              <img className={s.avatar} src={profile.customer.avatar} />
              <div className={s.name}>
                {profile.customer.name} {profile.customer.surName}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
