export const getFriends = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: "John",
                    surName: 'Джонавич',
                    status: 'Все сложно',
                    avatar: 'https://trikky.ru/wp-content/blogs.dir/1/files/2023/10/30/28e4ac42f547e6ac0f50f7cfa916ca93.jpg'
                },
                {
                    id: 2,
                    name: "Друг",
                    surName: 'Хуй',
                    status: 'Сосу понемножку',
                    avatar: 'https://steamuserimages-a.akamaihd.net/ugc/782989521799828488/99CC5CFF94186C28A21C7E81D145E9C6550DCC14/?imw=512&amp;imh=499&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'
                }
            ])
        }, 2000)
    })
}