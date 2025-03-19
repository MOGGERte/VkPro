import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import { getUser, getUsers } from '../../api/profile/request.js';
import { getNews } from '../../api/news/requests.js';
import { Loading } from '../LoadingPage/';
import { Post } from '../Post/Post.jsx';
import { useNavigate } from 'react-router';
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
          <div className={s.posts}>
            {userPost.map((post) => (
              <div key={post.id}>
                <Post
                  customerId={post.customerId}
                  customer={currentProfile.customer}
                  photoUrl={post.photoUrl}
                  text={post.text}
                  likesCounter={post.likesCounter}
                  commentsCounter={post.commentsCounter}
                  repostsCounter={post.repostsCounter}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={s.friendsListContainer}>
          <div className={s.contText}>
            <div className={s.frend} onClick={() => onFriendClick()}>
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
      </div>
    </div>
  );
};
