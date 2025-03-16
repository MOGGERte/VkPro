    import { useState, useEffect } from "react";
    import { getProfiles } from "../../api/profile/request";
    import { getFriends } from "../../api/friends/requests";
    import s from "./styles.module.css";

    export const Profile = () => {
        const [profile, setProfile] = useState(null);
        const [friends, setFriends] = useState([]);

        useEffect(() => {
            const fetchProfileAndFriends = async () => {
                const profiles = await getProfiles();  
                const friendsData = await getFriends();  
                const currentProfile = profiles.find((item) => item.id === 0);
                setProfile(currentProfile);
                setFriends(friendsData);
            };
        
            fetchProfileAndFriends();
        }, []);

        return (
            <div>
            {profile && (
                <div className={s.profile}>
                    <div className={s.bannerContainer}>
                        <img src={profile.banner} className={s.banner} />
                </div>

                <div className={s.profileContent}>
                    <div className={s.avatarContainer}>
                        <img src={profile.customer.avatar} className={s.avatar} />
                    </div>

                    <div className={s.info}>
                        <div className={s.name}>
                            {profile.customer.name} {profile.customer.surName}
                        </div>

                        <div className={s.status}>
                            {profile.customer.status}
                        </div>
                    </div>

                    <div className={s.posts}>
                        <div>Мои посты</div>
                    </div>
                </div>

                <div className={s.friendsList}>
                    <div>Друзья</div>
                    {friends.map((friend) => (
                    <div key={friend.id} className={s.friendItem}>
                        <img src={friend.customer.avatar} className={s.friendAvatar} />
                        <div className={s.friendName}>
                        {friend.customer.name} {friend.customer.surName}
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            )}
            </div>
        );
};
