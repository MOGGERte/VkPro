const cors = require("cors");
const express = require("express");
const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/posts", (req, res) => {
  res.json([
    {
      id: 1,
      customerId: 1,
      isOnline: "pc",
      photoUrl:
        "https://th.bing.com/th/id/OIP.Pskl7oIhYQ8jG46zykzYEgHaGA?w=240&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      text: "У меня новый аватар!",
      likesCounter: 10,
      commentsCounter: 5,
      repostsCounter: 2,
    },
    {
      id: 2,
      customerId: 1,
      isOnline: "pc",
      photoUrl:
        "https://th.bing.com/th/id/OIP.Pskl7oIhYQ8jG46zykzYEgHaGA?w=240&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      text: "У меня новый аватар!",
      likesCounter: 10,
      commentsCounter: 5,
      repostsCounter: 2,
    },
  ]);
});

app.get("/friends", (req, res) => {
  res.json([
    {
      id: 1,
      banner:
        "https://sun9-41.userapi.com/impg/ddeZDO-D9Zru2P7i_QCwe0XXpg_iZty8xyBpvA/1vc1BlWCCv0.jpg?size=960x384&quality=95&crop=0,152,2560,1024&sign=e6c9a662854e115dcbe7625e4eef3c0c&c_uniq_tag=pAtg5b3iIhazKCjrUXS3SxICA3C4udSt6hbmTUXuhaM&type=helpers&quot",
      customer: {
        name: "John",
        surName: "Джонавич",
        status: "Все сложно",
        avatar:
          "https://trikky.ru/wp-content/blogs.dir/1/files/2023/10/30/28e4ac42f547e6ac0f50f7cfa916ca93.jpg",
      },
      isOnline: "pc",
    },
    {
      id: 2,
      banner:
        "https://sun9-41.userapi.com/impg/ddeZDO-D9Zru2P7i_QCwe0XXpg_iZty8xyBpvA/1vc1BlWCCv0.jpg?size=960x384&quality=95&crop=0,152,2560,1024&sign=e6c9a662854e115dcbe7625e4eef3c0c&c_uniq_tag=pAtg5b3iIhazKCjrUXS3SxICA3C4udSt6hbmTUXuhaM&type=helpers&quot",
      customer: {
        name: "Друг",
        surName: "Хуй",
        status: "Сосу понемножку",
        avatar:
          "https://steamuserimages-a.akamaihd.net/ugc/782989521799828488/99CC5CFF94186C28A21C7E81D145E9C6550DCC14/?imw=512&amp;imh=499&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
      },
      isOnline: "phone",
    },
    {
      id: 3,
      banner:
        "https://sun9-41.userapi.com/impg/ddeZDO-D9Zru2P7i_QCwe0XXpg_iZty8xyBpvA/1vc1BlWCCv0.jpg?size=960x384&quality=95&crop=0,152,2560,1024&sign=e6c9a662854e115dcbe7625e4eef3c0c&c_uniq_tag=pAtg5b3iIhazKCjrUXS3SxICA3C4udSt6hbmTUXuhaM&type=helpers&quot",
      customer: {
        name: "Денчик",
        surName: "Башка",
        status: "Какой же я ахуенный",
        avatar:
          "https://trikky.ru/wp-content/blogs.dir/1/files/2023/10/30/28e4ac42f547e6ac0f50f7cfa916ca93.jpg",
      },
      isOnline: null,
    },
    {
      id: 4,
      banner:
        "https://sun9-41.userapi.com/impg/ddeZDO-D9Zru2P7i_QCwe0XXpg_iZty8xyBpvA/1vc1BlWCCv0.jpg?size=960x384&quality=95&crop=0,152,2560,1024&sign=e6c9a662854e115dcbe7625e4eef3c0c&c_uniq_tag=pAtg5b3iIhazKCjrUXS3SxICA3C4udSt6hbmTUXuhaM&type=helpers&quot",
      customer: {
        name: "WE",
        surName: "VENOM",
        status: "В лесу",
        avatar:
          "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/venomancer.png",
      },
      isOnline: "pc",
    },
  ]);
});

app.get("/users", (req, res) => {
  res.json([
    {
      id: 0,
      banner:
        "https://sun9-41.userapi.com/impg/ddeZDO-D9Zru2P7i_QCwe0XXpg_iZty8xyBpvA/1vc1BlWCCv0.jpg?size=960x384&quality=95&crop=0,152,2560,1024&sign=e6c9a662854e115dcbe7625e4eef3c0c&c_uniq_tag=pAtg5b3iIhazKCjrUXS3SxICA3C4udSt6hbmTUXuhaM&type=helpers&quot",
      customer: {
        name: "Юрий",
        surName: "Клемешов",
        status: "Делаю какую-то залупу",
        avatar:
          "https://sun9-17.userapi.com/impg/_BF8QlqlVGmgLtoTfsNsu3PwcNgMXp6XTMCQEg/oXnuxqnBt2Y.jpg?size=1280x720&quality=95&sign=ec9a92eb8ece3c5854550de03bf31351&type=album",
      },
      isOnline: "pc",
    },
    {
      id: 1,
      banner:
        "https://sun9-41.userapi.com/impg/ddeZDO-D9Zru2P7i_QCwe0XXpg_iZty8xyBpvA/1vc1BlWCCv0.jpg?size=960x384&quality=95&crop=0,152,2560,1024&sign=e6c9a662854e115dcbe7625e4eef3c0c&c_uniq_tag=pAtg5b3iIhazKCjrUXS3SxICA3C4udSt6hbmTUXuhaM&type=helpers&quot",
      customer: {
        name: "John",
        surName: "Джонавич",
        status: "Все сложно",
        avatar:
          "https://trikky.ru/wp-content/blogs.dir/1/files/2023/10/30/28e4ac42f547e6ac0f50f7cfa916ca93.jpg",
      },
      isOnline: "pc",
    },
    {
      id: 2,
      banner:
        "https://sun9-41.userapi.com/impg/ddeZDO-D9Zru2P7i_QCwe0XXpg_iZty8xyBpvA/1vc1BlWCCv0.jpg?size=960x384&quality=95&crop=0,152,2560,1024&sign=e6c9a662854e115dcbe7625e4eef3c0c&c_uniq_tag=pAtg5b3iIhazKCjrUXS3SxICA3C4udSt6hbmTUXuhaM&type=helpers&quot",
      customer: {
        name: "Друг",
        surName: "Хуй",
        status: "Сосу понемножку",
        avatar:
          "https://steamuserimages-a.akamaihd.net/ugc/782989521799828488/99CC5CFF94186C28A21C7E81D145E9C6550DCC14/?imw=512&amp;imh=499&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
      },
      isOnline: "phone",
    },
    {
      id: 3,
      banner:
        "https://sun9-41.userapi.com/impg/ddeZDO-D9Zru2P7i_QCwe0XXpg_iZty8xyBpvA/1vc1BlWCCv0.jpg?size=960x384&quality=95&crop=0,152,2560,1024&sign=e6c9a662854e115dcbe7625e4eef3c0c&c_uniq_tag=pAtg5b3iIhazKCjrUXS3SxICA3C4udSt6hbmTUXuhaM&type=helpers&quot",
      customer: {
        name: "Денчик",
        surName: "Башка",
        status: "Какой же я ахуенный",
        avatar:
          "https://trikky.ru/wp-content/blogs.dir/1/files/2023/10/30/28e4ac42f547e6ac0f50f7cfa916ca93.jpg",
      },
      isOnline: null,
    },
    {
      id: 4,
      banner:
        "https://sun9-41.userapi.com/impg/ddeZDO-D9Zru2P7i_QCwe0XXpg_iZty8xyBpvA/1vc1BlWCCv0.jpg?size=960x384&quality=95&crop=0,152,2560,1024&sign=e6c9a662854e115dcbe7625e4eef3c0c&c_uniq_tag=pAtg5b3iIhazKCjrUXS3SxICA3C4udSt6hbmTUXuhaM&type=helpers&quot",
      customer: {
        name: "WE",
        surName: "VENOM",
        status: "В лесу",
        avatar:
          "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/venomancer.png",
      },
      isOnline: "pc",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
