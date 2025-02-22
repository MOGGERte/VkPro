import { getFriends } from "../../api/friends/requests.js";
import s from "./styles.module.css";
import { useEffect, useState } from "react";
import { FriendItem } from "../FriendsItem/FriendsItem.jsx";

export const Friends = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        getFriends().then((value) => {
            setIsLoading(false);
            setFriends(value);
        })
    }, [])

    if (isLoading) return(
        <div className={s.loadingContainer}>
            <div className={s.loading}>Loading...</div>
        </div>
    
    )

    return(
        <div className={s.friendsContainer}>
            {friends.map((friendItem) =>{
                return(
                    <FriendItem
                        key={friendItem.id}
                        customer={friendItem.customer}
                        isOnline={friendItem.isOnline}
                    />
                )
            })}
        </div>
    )
}
