import { useEffect, useState } from 'react';
import { getNews } from '../../api/news/requests.js';
import { Post } from '../Post/Post.jsx';
import { Loading } from '../LoadingPage';
import s from './styles.module.css';

export const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const newsData = await getNews();
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);
  if (isLoading) return <Loading />;

  return (
    <div className={s.newsContainer}>
      {news.map((post) => (
        <Post
          key={post.id}
          customer={post.customer}
          customerId={post.customerId}
          photoUrl={post.photoUrl}
          text={post.text}
          likesCounter={post.likesCounter}
          commentsCounter={post.commentsCounter}
          repostsCounter={post.repostsCounter}
        />
      ))}
    </div>
  );
};
