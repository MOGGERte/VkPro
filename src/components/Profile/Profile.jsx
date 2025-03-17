import { useState, useEffect } from "react";
import { getProfiles } from "../../api/profile/request";
import s from "./styles.module.css";
import { useParams } from "react-router";

export const Profile = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const selectProfile = async () => {
            setIsLoading(true);
            const profiles = await getProfiles();  
            const currentProfile = profiles.find((item) => item.id === (id ? parseInt(id) : 0));
            setProfile(currentProfile);
            setIsLoading(false);
        };

        selectProfile();
    }, [id]);

    if (isLoading) return (
        <div className={s.loadingContainer}>
            <div className={s.loading}>Loading...</div>
        </div>
    );

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
            </div>
        )}
        </div>
    );
};