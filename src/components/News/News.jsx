import { useEffect, useState } from "react";
import { getNews } from "../../api/news/requests.js";
import { Post } from "../Post/Post.jsx"
import s from "./styles.module.css"


export const News = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getNews().then((value) => {
            setIsLoading(false);
            setNews(value);
        })
    }, [])

    if (isLoading) return(
        <div className={s.loadingContainer}>
            <div className={s.loading}>Loading...</div>
        </div>
    
    )

    return (
        <div className={s.newsContainer}>
            {news.map((post) => {
                return (
                    <Post
                        key={post.id}
                        customer={post.customer}
                        photoUrl={post.photoUrl}
                        text={post.text}
                        likesCounter={post.likesCounter}
                        commentsCounter={post.commentsCounter}
                        repostsCounter={post.repostsCounter}
                    />
                    )
                })}
        </div>
    )
}