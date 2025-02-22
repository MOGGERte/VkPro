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
            ])
        }, 2000)
    })
}