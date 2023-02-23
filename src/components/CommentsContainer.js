import React from "react";

const commentData = [
  {
    name: "Ashish kumar",
    text: "I love this video",
    replies: [{}],
  },
  {
    name: "Ashish kumar",
    text: "I love this video",
    replies: [{}],
  },
  {
    name: "Ashish kumar",
    text: "I love this video",
    replies: [{}],
  },
  {
    name: "Ashish kumar",
    text: "I love this video",
    replies: [{}],
  },
  {
    name: "Ashish kumar",
    text: "I love this video",
    replies: [{}],
  },
  {
    name: "Ashish kumar",
    text: "I love this video",
    replies: [{}],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/25/25634.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ Comments }) => {
  console.log(Comments);
  return Comments.map((comment, index) => (
    <Comment key={index} data={comment} />
  ));
};

const CommentsContainer = () => {
  console.log("data in container" + commentData);
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList Comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
