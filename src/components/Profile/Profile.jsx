import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getProfiles } from "../../api/profile/request.js";
import { getUserPosts } from "../../api/news/requests.js";
import { Post } from "../Post/Post.jsx";
import s from "./styles.module.css";

export const Profile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [profiles, setProfiles] = useState([]);
    const [currentProfile, setCurrentProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        getProfiles().then((profiles) => {
            setIsLoading(false);
            setProfiles(profiles);
            const profile = profiles.find(profile => profile.id === parseInt(id));
            setCurrentProfile(profile);
        });
    }, [id]);

    useEffect(() => {
        if (currentProfile) {
            getUserPosts(currentProfile.id).then((posts) => {
                setUserPosts(posts);
            });
        }
    }, [currentProfile]);

    if (isLoading) return (
        <div className={s.loadingContainer}>
            <div className={s.loading}>Loading...</div>
        </div>
    );

    if (!currentProfile) return <div>Profile not found</div>;

    const otherProfiles = profiles.filter(profile => profile.id !== parseInt(id));

    const friendClick = (friendId) => {
        navigate(`/profile/${friendId}`);
    };

    return (
        <div className={s.profile}>
            <div className={s.bannerContainer}>
                <img className={s.banner} src={currentProfile.banner}/>
            </div>
            <div className={s.profileContent}>
                <div className={s.avatarContainer}>
                    <img className={s.avatar} src={currentProfile.customer.avatar}/>
                </div>
                <div className={s.info}>
                    <div className={s.name}>{currentProfile.customer.name} {currentProfile.customer.surName}</div>
                    <div className={s.status}>{currentProfile.customer.status}</div>
                </div>
            </div>
            
            <div className={s.mainPage}>
                <div className={s.friendAndMusic}>
                    <div className={s.musicContainer}>поле под музыку</div>
                    <div className={s.posts}>
                    {userPosts.map(post => (
                        <Post
                            key={post.id}
                            customer={post.customer}
                            customerId={post.customerId}
                            photoUrl={post.photoUrl}
                            text={post.text}
                            likesCounter={post.likesCounter}
                            commentsCounter={post.commentsCounter}
                            repostsCounter={post.repostsCounter}
                            onProfileClick={friendClick}
                        />
                    ))}
                </div>
                </div>
                <div className={s.friendsListContainer}>
                    <div className={s.friendsList}>
                        {otherProfiles.map(profile => (
                            <div key={profile.id} className={s.friendItem} onClick={() => friendClick(profile.id)}>
                                <img className={s.avatar} src={profile.customer.avatar}/>
                                <div className={s.name}>{profile.customer.name} {profile.customer.surName}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};