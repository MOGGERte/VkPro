import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getUser, getUsers } from '../../api/profile/request.js';
import { getNews } from '../../api/news/requests.js';
import { Loading } from '../LoadingPage/';
import { useNavigate } from 'react-router';
import { ProfileInfo } from './ProfileInfo';
import { ProfilePosts } from './ProfilePosts';
import { ProfileFriendList } from './ProfileFriendList';
import s from './styles.module.css';

export const Profile = () => {
  const { id } = useParams();
  const [profiles, setProfiles] = useState([]);
  const [currentProfile, setCurrentProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userPost, setUserPost] = useState([]);
  const nav = useNavigate();
  const onFriendClick = () => {
    console.log('Friend clicked');
    nav(`/friends/`);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const [profile, profiles, news] = await Promise.all([getUser(id), getUsers(), getNews()]);

        console.log('Profile:', profile);
        setCurrentProfile(profile);

        console.log('Profiles:', profiles);
        setProfiles(profiles);

        console.log('News:', news);
        const userPosts = news.filter((post) => post.customerId === Number(id));
        console.log('User Posts:', userPosts);
        setUserPost(userPosts);
      } catch (error) {
        console.error('Error load data, Иди нахуй', error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [id]);

  if (isLoading) return <Loading />;

  if (!currentProfile) return <div>Profile not found</div>;

  const otherProfiles = profiles.filter((profile) => profile.id !== Number(id));

  return (
    <div className={s.profile}>
      <div className={s.bannerContainer}>
        <img className={s.banner} src={currentProfile.banner} />
      </div>
      <ProfileInfo customer={currentProfile.customer} />
      <div className={s.mainPage}>
        <div className={s.postAndMusic}>
          <div className={s.musicContainer}>поле под музыку</div>
          <ProfilePosts userPost={userPost} customer={currentProfile.customer} />
        </div>
        <ProfileFriendList otherProfiles={otherProfiles} onFriendClick={onFriendClick} />
      </div>
    </div>
  );
};
