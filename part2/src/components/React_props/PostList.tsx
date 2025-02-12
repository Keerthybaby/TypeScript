import React from "react";
import PostCard from "./PostCard";
import { Postprops } from "@/types/types";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
}

const PostList = async() => {
  const data: Postprops[] = await getData();
  return (
    <div>
      {/* <PostCard title="post title" body="post desc" /> */}
      {
        data.map((post:Postprops) =>(
          <PostCard key={post.id} {...post}/>
        ))
      }
    </div>
  );
};

export default PostList;
