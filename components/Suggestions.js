"use client";
import React, { Profiler, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

const Suggestions = () => {
  const [suggestions, setSuggestion] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      id: i,
      username: faker.internet.userName(),
      userImg: faker.image.avatar(),
      img: faker.image.avatar(),
    }));
    setSuggestion(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestion for you</h3>
        <button className="text-gray-600 font-semibold cursor-pointer">
          See All
        </button>
      </div>

      {suggestions.map((profile) => (
        <div key={profile.id} className="flex item-center justify-between mt-3">
          <img
            className="w-10 h-10 rounded-full p-[1.5px] border-red-500 border-2"
            src={profile.userImg}
            alt="profile img"
          />

          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            {/* <h3 className="text-blue-400 text-xs font-semibold cursor-pointer">
              
            </h3> */}
            <h3 className="text-xs text-gray-400">Check my profile</h3>
          </div>

          <button className="text-blue-400 text-xs font-semibold cursor-pointer">
            follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
