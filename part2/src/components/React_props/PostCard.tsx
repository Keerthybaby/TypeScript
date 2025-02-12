import { Postprops } from "@/types/types";
import React from "react";

const PostCard = ({title,body}:Postprops) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
