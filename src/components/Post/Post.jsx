import s from "./styles.module.css"
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { MdOutlineReply } from "react-icons/md";
import { useState } from "react";


export const Post = ({ id, customer, photoUrl, text, likesCounter, commentsCounter, repostsCounter }) => {

    const [isLiked, setIsLiked] = useState(false);

    return(
        <div>
            <div className={s.customerContainer}>
                <img className={s.avatar} src ={customer.photoUrl} />
                <div className={s.name}>{customer.name}</div>
            </div>

            <div className={s.postContainer}>
                <img className={s.photo}src ={photoUrl} />
                <div className={s.text}>{text}</div>
            </div>

            <div className={s.footerContainer}>

                <div onClick={() => {
                    // isLiked ? setIsLiked(false): setIsLiked(true)
                    // 
                    // setIsLiked((prev) => {
                    //     return prev ? false: true;
                    // })
                    //
                    // setIsLiked((prev) => {
                    //      return !prev;
                    // })
                    // 
                    setIsLiked((prev) => !prev);    
                    }} className={s.likesCounter}><FaRegHeart size={16} color={isLiked && "#ef2626"}    />{likesCounter}</div>
                
                <div className={s.commentsCounter}><FaRegCommentAlt size={16} />{commentsCounter}</div>
                
                <div className={s.repostsCounter}><MdOutlineReply size={16} />{repostsCounter}</div>
            </div>
        </div>
    )
}