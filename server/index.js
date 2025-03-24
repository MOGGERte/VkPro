import cors from "cors";
import express from "express";
import { friends } from "./MocsComponent/friends.js";
import { posts } from "./MocsComponent/posts.js";
import { users } from "./MocsComponent/users.js";
import { comments } from "./MocsComponent/comments.js";
import db from "./configs/db.js";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

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

app.get("/posts/:id", (req, res) => {
  const postId = Number(req.params.id);
  const post = posts.find((p) => p.id === postId);

  const customer = users.find((u) => u.id === post.customerId);
  console.log(customer);

  const postComments = comments
    .filter((comment) => comment.postId === postId)
    .map((comment) => {
      const commentCustomer = users.find((u) => u.id === comment.customerId);
      return {
        ...comment,
        customer: commentCustomer
          ? {
              id: commentCustomer.id,
              name: commentCustomer.name,
              avatar: commentCustomer.avatar,
            }
          : null,
      };
    });

  res.json({
    ...post,
    customer: customer
      ? {
          id: customer.id,
          name: customer.customer.name,
          avatar: customer.customer.avatar,
        }
      : null,
    comments: postComments,
  });
});

app.get("/posts/user/:id", (req, res) => {
  const userId = Number(req.params.id);
  const userPosts = posts.filter((post) => post.customerId === userId);
  res.json(userPosts);
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/users", async (req, res) => {
  const query = `select * from users;`;
  const data = await db.any(query);
  res.json(data);
});

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((u) => u.id === userId);
  res.json(user);
});

app.post("/posts/:id/like", (req, res) => {
  const postId = Number(req.params.id);
  const { isLiked, userId } = req.body;

  const post = posts.find((p) => p.id === postId);

  if (isLiked) {
    if (!post.likedInfo.includes(userId)) {
      post.likedInfo.push(userId);
      post.likesCounter += 1;
    }
  } else {
    const index = post.likedInfo.indexOf(userId);
    if (index !== -1) {
      post.likedInfo.splice(index, 1);
      if (post.likesCounter > 0) {
        post.likesCounter -= 1;
      }
    }
  }
  res.json({ statusbar: "success" });
});

(async () => {
  try {
    await db.any(`select CURRENT_TIMESTAMP`);
    console.log("Database Connected");
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
})();

// app.get('/users', async (req, res) => {
//   const data = await db.any(`
//       SELECT id, email, first_name, avatar_url
//       FROM users
//   `);

//   res.json(data);
// });
