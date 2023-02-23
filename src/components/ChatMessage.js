import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm">
      <img
        className="h-8"
        alt="user"
        src="https://yt4.ggpht.com/ZoVRat5bJzWNdN_-KJMX1PUyGd5-2pFhqtyYQwVBOi5LZGGtaczSZwPjNiGFFWyVRttiq8POYw=s32-c-k-c0x00ffffff-no-rj"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
