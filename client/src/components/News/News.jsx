import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { getNews } from '../../api/news/requests.js';
import { Post } from '../Post/Post.jsx';
import { Loading } from '../LoadingPage';
import s from './styles.module.css';

export const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getNews().then((value) => {
      setIsLoading(false);
      setNews(value);
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className={s.newsContainer}>
      {news.map((post) => {
        return (
          <Link to={`/profile/${post.customerId}`} key={post.id} className={s.postLink}>
            <Post
              customer={post.customer}
              customerId={post.customerId}
              photoUrl={post.photoUrl}
              text={post.text}
              likesCounter={post.likesCounter}
              commentsCounter={post.commentsCounter}
              repostsCounter={post.repostsCounter}
            />
          </Link>
        );
      })}
    </div>
  );
};
