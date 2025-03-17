export const getFriends = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          customer: {
            name: 'John',
            surName: 'Джонавич',
            status: 'Все сложно',
            avatar:
              'https://trikky.ru/wp-content/blogs.dir/1/files/2023/10/30/28e4ac42f547e6ac0f50f7cfa916ca93.jpg'
          },
          isOnline: 'pc'
        },
        {
          id: 2,
          customer: {
            name: 'Друг',
            surName: 'Хуй',
            status: 'Сосу понемножку',
            avatar:
              'https://steamuserimages-a.akamaihd.net/ugc/782989521799828488/99CC5CFF94186C28A21C7E81D145E9C6550DCC14/?imw=512&amp;imh=499&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'
          },
          isOnline: 'phone'
        },
        {
          id: 3,
          customer: {
            name: 'Денчик',
            surName: 'Башка',
            status: 'Какой же я ахуенный',
            avatar:
              'https://trikky.ru/wp-content/blogs.dir/1/files/2023/10/30/28e4ac42f547e6ac0f50f7cfa916ca93.jpg'
          },
          isOnline: null
        },
        {
          id: 4,
          customer: {
            name: 'WE',
            surName: 'VENOM',
            status: 'В лесу',
            avatar:
              'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/venomancer.png'
          },
          isOnline: 'pc'
        }
      ]);
    }, 2000);
  });
};
