import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import { getUser, getUsers } from '../../api/profile/request.js';
import { getNews } from '../../api/news/requests.js';
import { Loading } from '../LoadingPage/';
import s from './styles.module.css';

export const Profile = () => {
  const { id } = useParams();
  const [profiles, setProfiles] = useState([]);
  const [currentProfile, setCurrentProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUser(id)
      .then((profile) => {
        setCurrentProfile(profile);
        return getUsers();
      })
      .then((profiles) => {
        setProfiles(profiles);
        setIsLoading(false);
        return getNews();
      });
  }, [id]);

  if (isLoading) return <Loading />;

  if (!currentProfile) return <div>Profile not found</div>;

  const otherProfiles = profiles.filter((profile) => profile.id !== Number(id));

  return (
    <div className={s.profile}>
      <div className={s.bannerContainer}>
        <img className={s.banner} src={currentProfile.banner} />
      </div>
      <div className={s.profileContent}>
        <div className={s.avatarContainer}>
          <img className={s.avatar} src={currentProfile.customer.avatar} />
        </div>
        <div className={s.info}>
          <div className={s.name}>
            {currentProfile.customer.name} {currentProfile.customer.surName}
          </div>
          <div className={s.status}>{currentProfile.customer.status}</div>
        </div>
      </div>

      <div className={s.mainPage}>
        <div className={s.postAndMusic}>
          <div className={s.musicContainer}>поле под музыку</div>
          <div className={s.posts}>мои новости</div>
        </div>
        <div className={s.friendsListContainer}>
          <div className={s.friendsList}>
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
    </div>
  );
};
