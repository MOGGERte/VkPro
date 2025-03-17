import { getProfiles } from "../profile/request.js";

export const getNews = async () => {
    const profiles = await getProfiles(); 

    const posts = [
        {
            id: 1,
            customerId: 0,
            photoUrl: "https://th.bing.com/th/id/OIP.Pskl7oIhYQ8jG46zykzYEgHaGA?w=240&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            text: "У меня новый аватар!",
            likesCounter: 10,
            commentsCounter: 5,
            repostsCounter: 2,
        },
        {
            id: 1,
            customerId: 0,
            photoUrl: "https://th.bing.com/th/id/OIP.Pskl7oIhYQ8jG46zykzYEgHaGA?w=240&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            text: "У меня новый аватар!",
            likesCounter: 10,
            commentsCounter: 5,
            repostsCounter: 2,
        },
        {
            id: 2,
            customerId: 1,
            photoUrl: "https://th.bing.com/th/id/OIP.DhWzHj9yCblqVTFgjxTWAgHaHU?w=190&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            text: "У меня супер фотка",
            likesCounter: 20,
            commentsCounter: 10,
            repostsCounter: 5,
        },
    ];

    return posts.map(post => {
        const profile = profiles.find(profile => profile.id === post.customerId);
        return {
            ...post,
            customer: {
                name: `${profile.customer.name} ${profile.customer.surName}`,
                avatar: profile.customer.avatar,
            },
        };
    });
};

export const getUserPosts = async (userId) => {
    const news = await getNews();
    return news.filter(post => post.customerId === userId);
};