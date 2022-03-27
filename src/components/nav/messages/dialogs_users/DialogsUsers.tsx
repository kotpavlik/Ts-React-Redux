import React from "react";
import MessagesCompanion from "./dialogs/Messages";
import s from "./DialogsUsers.module.css";
import UsersInDialogs from "./users_in_dialog/UsersInDialogs";

const DialogsUsers = () => {
  return (
    <div className={s.dialogs_users_wrapper}>
      <div className={s.users_in_dialog}>
        <UsersInDialogs />
      </div>
      <div className={s.dialogs}>
        <MessagesCompanion />
      </div>
    </div>
  );
};

export default DialogsUsers;
