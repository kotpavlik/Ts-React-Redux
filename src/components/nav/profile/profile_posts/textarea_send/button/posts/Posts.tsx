import React from "react";
import s from "./Posts.module.css";
import logo_user from "../../../../../../assets/profilePhoto.jpeg";

type PostType = {
  post: string;

};

const Posts = (props: PostType) => {
  return (
    <div className={s.posts_wrapper}>
      <div className={s.post}>{props.post}</div>
      <div className={s.logo_user_post}>
        <img src={logo_user} alt="" />
      </div>
    </div>
  );
};

export default Posts;
