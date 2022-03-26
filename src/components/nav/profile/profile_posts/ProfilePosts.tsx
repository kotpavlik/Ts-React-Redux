import React from "react";
import s from "./ProfilePosts.module.css";
import ProfileTextarea from "./textarea_send/Textarea";

const ProfilePosts = () => {
  return (
    <div className={s.profile_posts}>
      <ProfileTextarea />
    </div>
  );
};

export default ProfilePosts;
