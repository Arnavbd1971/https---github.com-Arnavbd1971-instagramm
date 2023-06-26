import React from "react";
import Post from "./Post";
import { faker } from "@faker-js/faker";

const posts = [...Array(20)].map((_, i) => ({
  username: faker.internet.userName(),
  userImg: faker.image.avatar(),
  img: faker.image.avatar(),
  likes: 2,
  caption: "This is Ok!",
}));

// const posts = [
//   {
//     id: "123",
//     username: "User 1",
//     userImg: "https://links.papareact.com/3ke",
//     img: "https://links.papareact.com/3ke",
//     caption: "This is Ok!",
//   },
//   {
//     id: "123",
//     username: "User 1",
//     userImg: "https://links.papareact.com/3ke",
//     img: "https://links.papareact.com/3ke",
//     caption: "This is Ok!",
//   },
// ];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          likes={post.likes}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
