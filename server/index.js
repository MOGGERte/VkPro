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
      photoUrl:
        "https://th.bing.com/th/id/OIP.Pskl7oIhYQ8jG46zykzYEgHaGA?w=240&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      text: "У меня новый аватар!",
      likesCounter: 10,
      commentsCounter: 5,
      repostsCounter: 2,
    },
    {
      id: 2,
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
      photoUrl:
        "https://th.bing.com/th/id/OIP.Pskl7oIhYQ8jG46zykzYEgHaGA?w=240&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      text: "У меня новый аватар!",
      likesCounter: 10,
      commentsCounter: 5,
      repostsCounter: 2,
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
