import React from "react";
import s from "./Posts.module.css";

type PostType = {
  post: string;
  profilePhoto:string

};

const Posts = (props: PostType) => {
    debugger
  return (
    <div className={s.posts_wrapper}>
      <div className={s.post}>{props.post}</div>
      <div className={s.logo_user_post}>
        <img src={props.profilePhoto} alt="" />
      </div>
    </div>
  );
};

export default Posts;
