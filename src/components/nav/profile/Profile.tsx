import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./profile_info/ProfileInfo";
import ProfilePosts from "./profile_posts/ProfilePosts";
import user_logo from './../../assets/profilePhoto.jpeg'
import {v1} from 'uuid';

export type postsType = {
    id: string
    message: string
    likesCount: number
    profilePhoto:user_logo
}
type user_logo = {
    user_logo: string
}
const Profile = () => {
    let posts = [
        {id: v1(),message:"Hi, how are you?", likesCount:12,profilePhoto:{user_logo}},
        {id: v1(),message:"It's my first post", likesCount:11,profilePhoto:{user_logo}},
        {id: v1(),message:"Bla-bla-bla", likesCount:10,profilePhoto:{user_logo}},
        {id: v1(),message:"Hi, how are you?", likesCount:12,profilePhoto:{user_logo}},
    ]

  return (
    <div className={s.profileWrap}>
      <div className={s.profileWrapPosts}>
        <ProfilePosts posts={posts}/>
      </div>
      <div className={s.profileWrapInfo}>
        <ProfileInfo />
      </div>
    </div>
  );
};

export default Profile;
