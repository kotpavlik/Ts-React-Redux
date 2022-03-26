import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./profile_info/ProfileInfo";
import ProfilePosts from "./profile_posts/ProfilePosts";

const Profile = () => {
  return (
    <div className={s.profileWrap}>
      <div className={s.profileWrapPosts}>
        <ProfilePosts />
      </div>
      <div className={s.profileWrapInfo}>
        <ProfileInfo />
      </div>
    </div>
  );
};

export default Profile;
