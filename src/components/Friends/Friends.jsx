import { getFriends } from "../../api/friends/requests.js";
import s from "./styles.module.css";
import { useEffect, useState } from "react";
import { FriendItem } from "../FriendsItem/FriendsItem.jsx";
import { useNavigate } from 'react-router';

export const Friends = ({ onFriendClick }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [friends, setFriends] = useState([]);
    const navigate = useNavigate();

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
                    <div onClick={() => {
                        console.log(`Кликнул на друга с ID: ${friendItem.id}`);
                        onFriendClick(friendItem.id);
                        navigate(`/profile/${friendItem.id}`);
                    }} key={friendItem.id}>
                        <FriendItem
                            customer={friendItem.customer}
                            isOnline={friendItem.isOnline}
                        />
                    </div>
                )
            })}
        </div>
    )
}

