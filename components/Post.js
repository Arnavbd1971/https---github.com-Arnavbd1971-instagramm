import React from "react";

import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, username, userImg, img, likes, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header  */}
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          src={userImg}
          alt="userImg"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* img  */}
      <img src={img} className="object-cover w-full" alt="PostImg" />

      {/* Buttons  */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="postBtn" />
          <ChatIcon className="postBtn" />
          <PaperAirplaneIcon className="postBtn" />
        </div>

        <BookmarkIcon className="postBtn" />
      </div>

      {/* Likes  */}
      <div className="px-4 pt-4">
        <p className="font-bold">{likes} Likes</p>
      </div>

      {/* Caption  */}
      <p className="p-4 truncate">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      {/* Comments  */}
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-10 w-10 object-contain border p-1 mr-3"
          src={userImg}
          alt="userImg"
        />
        <div className="flex-1 font-bold text-sm">
          {username}
          <p className="text-xs text-gray-600">Nice Picture...</p>
        </div>
        <p className="text-xs font-semibold">3 hours ago</p>
      </div>
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-10 w-10 object-contain border p-1 mr-3"
          src={userImg}
          alt="userImg"
        />
        <div className="flex-1 font-bold text-sm">
          {username}
          <p className="text-xs text-gray-600">This is so sick...</p>
        </div>
        <p className="text-xs font-semibold">3 hours ago</p>
      </div>

      {/* Input box  */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}

export default Post;
