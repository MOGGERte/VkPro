import cors from "cors";
import express from "express";
import { friends } from "./MocsComponent/friends.js";
import { posts } from "./MocsComponent/posts.js";
import { users } from "./MocsComponent/users.js";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/news", (req, res) => {
  const newsWithUserInfo = posts.map((post) => {
    const user = users.find((u) => u.id === post.customerId);
    return {
      ...post,
      customer: user ? user.customer : null,
    };
  });
  res.json(newsWithUserInfo);
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  res.json(user);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
