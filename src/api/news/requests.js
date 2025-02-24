export const getNews = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    customer:{
                        id: 1,
                        name: "Yuriy Klemeshov",
                        photoUrl: "https://th.bing.com/th/id/R.e1dffcb8660fb9cc29ffb0f73e5e3d75?rik=WMn5Ts3Ejk36lg&riu=http%3a%2f%2fmolotovfit.ru%2fwp-content%2fuploads%2f2020%2f10%2fajnj.jpg&ehk=jYhoNZHETsh7iuLjm6D3yiviQkhUrvlrPPRGqf1UTPQ%3d&risl=&pid=ImgRaw&r=0",
                        description: ""
                    },
                    photoUrl: "https://th.bing.com/th/id/OIP.LznsMmCRxBdvweibapoBvgHaHT?rs=1&pid=ImgDetMain",
                    text: 'Я дотер',
                    likesCounter: 5,
                    commentsCounter: 4,
                    repostsCounter: 34,
                    createdDate: new Date("2025-02-21 23:34")
                },
                {
                    id: 2,
                    customer:{
                        id: 1,
                        name: "Yuriy Klemeshov",
                        photoUrl: "https://th.bing.com/th/id/R.e1dffcb8660fb9cc29ffb0f73e5e3d75?rik=WMn5Ts3Ejk36lg&riu=http%3a%2f%2fmolotovfit.ru%2fwp-content%2fuploads%2f2020%2f10%2fajnj.jpg&ehk=jYhoNZHETsh7iuLjm6D3yiviQkhUrvlrPPRGqf1UTPQ%3d&risl=&pid=ImgRaw&r=0",
                        description: ""
                    },
                    photoUrl: "https://th.bing.com/th/id/OIP.JJwjev2C71HKK3ZMhAP76QHaEK?rs=1&pid=ImgDetMain",
                    text: '13k soon',
                    likesCounter: 5,
                    commentsCounter: 4,
                    repostsCounter: 34,
                    createdDate: new Date("2025-02-21 23:34")
                },
                {
                    id: 20,
                    customer:{
                        id: 11,
                        name: "VENOM",
                        photoUrl: "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/venomancer.png'",
                        description: ""
                    },
                    photoUrl: "https://trikky.ru/wp-content/blogs.dir/1/files/2019/02/24/B11B77A7-F7EF-44BF-85B1-BB0252AAF3A1.jpeg",
                    text: 'Ржамба)',
                    likesCounter: 5,
                    commentsCounter: 4,
                    repostsCounter: 34,
                    createdDate: new Date("2025-02-23 18:28")
                },
                {
                    id: 3,
                    customer:{
                        id: 3,
                        name: "Yuriy 13kbog",
                        photoUrl: "https://th.bing.com/th/id/OIP.MNU1OOIdT6RmWl87nwusLQHaHn?rs=1&pid=ImgDetMain",
                        description: ""
                    },
                    photoUrl: "https://th.bing.com/th/id/OIP.1PQ6QOQVI3Yt8B9V8hDILgHaEK?rs=1&pid=ImgDetMain",
                    text: '14k soon',
                    likesCounter: 5,
                    commentsCounter: 4,
                    repostsCounter: 34,
                    createdDate: new Date("2025-02-21 23:34")
                },
                {
                    id: 21,
                    customer:{
                        id: 12,
                        name: "Типочек",
                        photoUrl: "https://th.bing.com/th/id/OIP.AR-eyfkelijHLsKF9Ew8ZwHaG3?pcl=1b1a19&rs=1&pid=ImgDetMain'",
                        description: ""
                    },
                    photoUrl: "https://i.pinimg.com/736x/df/ef/fb/dfeffb06898d10a0c515fac026caa7c8.jpg",
                    text: 'ЛОЛ ставте класс если жиза))))00)))))',
                    likesCounter: 5,
                    commentsCounter: 4,
                    repostsCounter: 34,
                    createdDate: new Date("2025-02-23 18:29")
                },
                {
                    id: 22,
                    customer:{
                        id: 13,
                        name: "Vеном",
                        photoUrl: "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/venomancer.png'",
                        description: ""
                    },
                    photoUrl: "https://cs11.pikabu.ru/post_img/big/2019/07/31/9/1564586532121120879.jpg",
                    text: 'ЖИЗА ХАХАХАХААХАХХА',
                    likesCounter: 5,
                    commentsCounter: 4,
                    repostsCounter: 34,
                    createdDate: new Date("2025-02-23 18:28")
                },
                {
                    id: 4,
                    customer:{
                        id: 2,
                        name: "Dmitriy Klemeshov",
                        photoUrl: "https://th.bing.com/th/id/OIP.A15le-wyjLbcsofpJ9G36gHaEK?rs=1&pid=ImgDetMain",
                        description: ""
                    },
                    photoUrl: "https://th.bing.com/th/id/OIP.NGOb2asr0ATHJ6QQvCsP1gHaEK?rs=1&pid=ImgDetMain",
                    text: null,
                    likesCounter: 9999,
                    commentsCounter: 4,
                    repostsCounter: 34,
                    createdDate: new Date("2025-02-21 23:34")
                },
                {
                    id: 23,
                    customer:{
                        id: 14,
                        name: "VENOMанус",
                        photoUrl: "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/venomancer.png'",
                        description: ""
                    },
                    photoUrl: "https://th.bing.com/th/id/OIP.tb2zejBK_qS90jHraoSOkAHaFy?rs=1&pid=ImgDetMain",
                    text: 'кто 1 на 1 на мид на паджах?',
                    likesCounter: 5,
                    commentsCounter: 4,
                    repostsCounter: 34,
                    createdDate: new Date("2025-02-23 18:30")
                },
                {
                    id: 29,
                customer:{
                    id: 15,
                    name: "Петя",
                    photoUrl: "https://th.bing.com/th/id/OIP.kNlqxRylHP3A-qVduv7R6QHaIZ?rs=1&pid=ImgDetMain'",
                    description: ""
                },
                photoUrl: "https://th.bing.com/th/id/OIP.Ev04bsGwCdDp2RJSbEnRFQHaFa?rs=1&pid=ImgDetMain",
                text: 'ужс, седне игра не пошла, пришлось в лес уйти на лионе 5ке с 5 минуты, там керри даун не умеет играть((((',
                likesCounter: 5,
                commentsCounter: 4,
                repostsCounter: 34,
                createdDate: new Date("2025-02-23 18:35")
            },
            ])
        }, 2000)
    })
}