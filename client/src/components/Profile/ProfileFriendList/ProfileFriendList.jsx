import s from './styles.module.css';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

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

ProfileFriendList.propTypes = {
  otherProfiles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      customer: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surName: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  onFriendClick: PropTypes.func.isRequired
};
