import React from "react";
import DialogsUsers from "./dialogs_users/DialogsUsers";
import s from "./Messages.module.css";

const Messages = () => {
  return (
    <div className={s.all_messages_wrapper}>
      <div className={s.messagesWrap}>
        <DialogsUsers />
      </div>
    </div>
  );
};

export default Messages;
