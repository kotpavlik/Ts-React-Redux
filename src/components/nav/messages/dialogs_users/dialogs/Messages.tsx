import React from "react";
import Button from "../../../profile/profile_posts/textarea_send/button/Button";
import s from "./Messages.module.css";
import YourFriendMessage from "./your_friend_message/YourFriendMessage";
import YouMessages from "./you_messages/YouMessages";

const MessagesCompanion = () => {
  return (
    <div className={s.wrapper_MessagesCompanion}>
      <div className={s.overflow_for_MessagesCompanion}>
        <YouMessages />
        <YourFriendMessage />
        <YouMessages />
        <YourFriendMessage />
        <YouMessages />
        <YourFriendMessage />
        <YouMessages />
        <YourFriendMessage />
      </div>
      <div className={s.mess_com_textarea}>
        <textarea
          className={s.textarea}
          name="posts_area"
          placeholder="wright please"
          id="profile_texta"
        ></textarea>
        <Button />
      </div>
    </div>
  );
};

export default MessagesCompanion;
