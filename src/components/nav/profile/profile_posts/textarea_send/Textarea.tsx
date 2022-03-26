import React from "react";
import Button from "./button/Button";
import Posts from "./button/posts/Posts";
import s from "./Textarea.module.css";

const ProfileTextarea = () => {
  return (
    <div className={s.all_wrapper_profile_textarea}>
      <h3>Posts</h3>
      <div className={s.profile_textarea}>
        <textarea
          className={s.textarea}
          name="posts_area"
          placeholder="wright please"
          id="profile_texta"
        ></textarea>
        <Button />
      </div>
      <div className={s.posts}>
        <Posts post="hello" />
        <Posts post="have a good hacking" />
        <Posts post="oh my god " />
        <Posts post="it is hell" />
      </div>
    </div>
  );
};

export default ProfileTextarea;
