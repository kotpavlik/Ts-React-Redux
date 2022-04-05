import React from "react";
import s from "./ProfilePosts.module.css";
import ProfileTextarea from "./textarea_send/Textarea";
import {postsType} from '../Profile';

export  type PropsPostTypes = {
    posts: Array<postsType>
}

const ProfilePosts = (props:PropsPostTypes) => {
  return (
    <div className={s.profile_posts}>
      <ProfileTextarea posts={props.posts}/>
    </div>
  );
};

export default ProfilePosts;
