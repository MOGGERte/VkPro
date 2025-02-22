import s from "./styles.module.css"
import { FaUser, FaUserFriends } from "react-icons/fa";
import { VscWindow } from "react-icons/vsc";
import { GiUltrasound } from "react-icons/gi";

export const Sidebar = ({ setPage }) => {
    return(
        <nav className={s.sidebar}>
            <div onClick={() => {setPage("profile")}} className={s.item}><FaUser />My Profile</div>
            <div onClick={() => {setPage("news")}} className={s.item}><VscWindow />News</div>
            <div onClick={() => {setPage("friends")}} className={s.item}><FaUserFriends />Friends</div>
            <div onClick={() => {setPage("music")}} className={s.item}><GiUltrasound />Music</div>
        </nav>
    )
}