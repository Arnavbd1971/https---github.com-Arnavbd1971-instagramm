"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";

const MiniProfile = () => {
  const { data: session } = useSession();
  // console.log("session");
  // console.log(session);

  return (
    <div className="flex item-center justify-between mt-10 ml-10">
      {/* <img
        className="rounded-full p-[1.5px] border-red-500 border-2 w-16 h-16"
        src={session?.user?.image}
        alt=""
      />

      <div className="flex-1 mx-4 mt-3">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button
        onClick={signOut}
        className="text-blue-400 text-sm font-semibold cursor-pointer"
      >
        Sign Out
      </button> */}
      {session ? (
        <>
          <img
            className="rounded-full p-[1.5px] border-red-500 border-2 w-16 h-16"
            src={session.user.image}
            alt=""
          />

          <div className="flex-1 mx-4 mt-3">
            <h2 className="font-bold">{session?.user?.username}</h2>
            <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
          </div>

          <button
            onClick={signOut}
            className="text-blue-400 text-sm font-semibold cursor-pointer"
          >
            Sign Out
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MiniProfile;
