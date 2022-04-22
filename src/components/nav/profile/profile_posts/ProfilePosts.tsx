import React from "react";
import s from "./ProfilePosts.module.css";
import ProfileTextarea from "./textarea_send/ProfileTextarea";
import {postsType} from '../Profile';

export  type PropsPostTypes = {
    posts: Array<postsType>
    NewPostText: string
}

const ProfilePosts = (props:PropsPostTypes) => {

  return (
    <div className={s.profile_posts}>
      <ProfileTextarea posts={props.posts}  NewPostText={props.NewPostText}/>
    </div>
  );
};

export default ProfilePosts;
